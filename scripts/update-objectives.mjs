// Обновляет tasks.json целями квестов (EN+RU) и вики-ссылками из api.tarkov.dev.
//
// Запуск:  node scripts/update-objectives.mjs
//
// Требуется доступ к https://api.tarkov.dev (открытый GraphQL API, без ключей).
// Скрипт дополняет существующие квесты полями `wiki` и `objectives`
// [{ type, en, ru?, count?, fir?, optional? }] и ничего больше не трогает.

import { readFile, writeFile } from "fs/promises";

const TASKS_URL = new URL("../tasks.json", import.meta.url);

const QUERY = (lang) => `{
  tasks(lang: ${lang}) {
    id
    wikiLink
    objectives {
      id
      type
      description
      optional
      ... on TaskObjectiveItem { count foundInRaid }
      ... on TaskObjectiveShoot { count }
    }
  }
}`;

async function gql(lang) {
  const res = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query: QUERY(lang) }),
  });

  if (!res.ok) throw new Error(`api.tarkov.dev HTTP ${res.status}`);

  const { data, errors } = await res.json();
  if (errors) throw new Error(JSON.stringify(errors));
  return data.tasks;
}

// нормализация типов tarkov.dev к нашим иконкам
const TYPE_MAP = {
  shoot: "kill",
  giveItem: "collect",
  sellItem: "collect",
  giveQuestItem: "collect",
  findItem: "find",
  findQuestItem: "find",
  plantItem: "place",
  plantQuestItem: "place",
  buildWeapon: "build",
  playerLevel: "experience",
  traderLevel: "reputation",
  traderStanding: "reputation",
  useItem: "mark",
};

const [en, ru, tasksRaw] = await Promise.all([gql("en"), gql("ru"), readFile(TASKS_URL, "utf8")]);

const tasks = JSON.parse(tasksRaw);
const enMap = new Map(en.map((t) => [t.id, t]));
const ruMap = new Map(ru.map((t) => [t.id, t]));

let matched = 0,
  withObjectives = 0;

for (const q of tasks) {
  const e = enMap.get(q.id);
  if (!e) continue;

  matched++;

  if (e.wikiLink) q.wiki = e.wikiLink;

  const ruObjs = new Map((ruMap.get(q.id)?.objectives || []).map((o) => [o.id, o]));

  const objs = (e.objectives || [])
    .filter((o) => o.description && o.type !== "taskStatus")
    .map((o) => {
      const out = { type: TYPE_MAP[o.type] || o.type, en: o.description };

      const r = ruObjs.get(o.id);
      if (r?.description && r.description !== o.description) out.ru = r.description;

      if (o.count > 1) out.count = o.count;
      if (o.foundInRaid) out.fir = true;
      if (o.optional) out.optional = true;

      return out;
    });

  if (objs.length) {
    q.objectives = objs;
    withObjectives++;
  }
}

await writeFile(TASKS_URL, JSON.stringify(tasks, null, 2) + "\n");

console.log(`matched ${matched}/${tasks.length} quests, objectives on ${withObjectives}`);
