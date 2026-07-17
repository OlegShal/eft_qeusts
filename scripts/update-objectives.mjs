// Обновляет tasks.json целями квестов (EN+RU), вики-ссылками, предметами
// и ключами из api.tarkov.dev.
//
// Запуск:  node scripts/update-objectives.mjs
//
// ВАЖНО: из облачной песочницы Claude api.tarkov.dev недоступен (сетевая
// политика окружения) — запускать с локальной машины. См. TODO.md.
//
// Требуется доступ к https://api.tarkov.dev (открытый GraphQL API, без ключей).
// Скрипт дополняет существующие квесты полями:
//   wiki        — ссылка на страницу вики
//   objectives  — [{ type, en, ru?, count?, fir?, optional?, items? }]
//                 items: [{ n: имя, s: короткая подпись, icon: URL иконки }]
//   keys        — требуемые ключи [{ n, s, icon, map? }]
// (items/keys с иконками — данные под фичу «Сборы в рейд», см. TODO.md)
// и ничего больше не трогает.

import { readFile, writeFile } from "fs/promises";

const TASKS_URL = new URL("../tasks.json", import.meta.url);

const QUERY = (lang) => `{
  tasks(lang: ${lang}) {
    id
    wikiLink
    neededKeys {
      keys { name shortName iconLink }
      map { name }
    }
    objectives {
      id
      type
      description
      optional
      ... on TaskObjectiveItem {
        count
        foundInRaid
        items { name shortName iconLink }
      }
      ... on TaskObjectiveShoot { count }
    }
  }
}`;

const MAX_ALT_ITEMS = 8; // альтернативы вида «любой из ключей» не раздуваем

const packItem = (i) => ({ n: i.name, s: i.shortName, icon: i.iconLink });

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

  const r = ruMap.get(q.id);

  // требуемые ключи (для чек-листа «Сборы в рейд»), с русским именем в nRu
  const ruKeys = (r?.neededKeys || []).flatMap((nk) => nk.keys || []);

  const keys = (e.neededKeys || []).flatMap((nk, gi) =>
    (nk.keys || []).map((k, ki) => {
      const out = { ...packItem(k), ...(nk.map?.name ? { map: nk.map.name } : {}) };
      const rk = (r?.neededKeys || [])[gi]?.keys?.[ki] || ruKeys.find((x) => x && x.name && x.iconLink === k.iconLink);
      if (rk?.name && rk.name !== k.name) out.nRu = rk.name;
      return out;
    }),
  );
  if (keys.length) q.keys = keys;
  else delete q.keys;

  const ruObjs = new Map((r?.objectives || []).map((o) => [o.id, o]));

  const objs = (e.objectives || [])
    .filter((o) => o.description && o.type !== "taskStatus")
    .map((o) => {
      const out = { type: TYPE_MAP[o.type] || o.type, en: o.description };

      const r = ruObjs.get(o.id);
      if (r?.description && r.description !== o.description) out.ru = r.description;

      if (o.count > 1) out.count = o.count;
      if (o.foundInRaid) out.fir = true;
      if (o.optional) out.optional = true;

      if (o.items?.length) {
        const ruItems = ruObjs.get(o.id)?.items || [];
        out.items = o.items.slice(0, MAX_ALT_ITEMS).map((it, i) => {
          const packed = packItem(it);
          if (ruItems[i]?.name && ruItems[i].name !== it.name) packed.nRu = ruItems[i].name;
          return packed;
        });
      }

      return out;
    });

  if (objs.length) {
    q.objectives = objs;
    withObjectives++;
  }
}

await writeFile(TASKS_URL, JSON.stringify(tasks, null, 2) + "\n");

console.log(`matched ${matched}/${tasks.length} quests, objectives on ${withObjectives}`);
