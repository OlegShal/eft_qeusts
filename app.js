const DATA = window.DATA;

const SVGNS = "http://www.w3.org/2000/svg";

const byId = new Map(DATA.map((d) => [d.id, d]));

// ---- language ----

let LANG = "ru";

const DICT = {
  ru: {
    Prapor: "Прапор",
    Therapist: "Терапевт",
    Skier: "Лыжник",
    Peacekeeper: "Миротворец",
    Mechanic: "Механик",
    Ragman: "Барахольщик",
    Jaeger: "Егерь",
    Ref: "Реф",
    Fence: "Скупщик",
    "BTR Driver": "Водитель БТР",
    Lightkeeper: "Смотритель",

    old: "СТАРЫЙ",
    new: "НОВЫЙ",
    fit: "⤢ Весь граф",
    search: "Поиск квеста…",

    required: "Обязательные",
    normal: "Обычные",
    junk: "Мусор",
    minxp: "Мин. XP:",
    unlocks: "Открывает ≥",
    links: "Связи",
    theme: "Тема",

    hint: "колесо — зум · тащить — панорама · навести/кликнуть квест — подсветить цепочку",

    s_req: "Обязательных",
    s_prog: "Прогресс Каппы",
    s_junk: "Мусор",
    s_total: "Всего",
    q: "кв.",

    collector: "Коллекционер 1.1.0.0:",
    fencerep: "Реп. Скупщика 3",
    level: "Уровень 40",
    keys: "★ 4 ключевых квеста →",
    chain: "в цепочке",

    v_graph: "Граф",
    v_list: "Список",
    v_planner: "Рейды",
    kappa: "🎯 Каппа",
    seasonal: "❄ Сезон +25%",
    mylevel: "Мой уровень:",
    mylevel_short: "Ур.",
    hidedone: "Скрыть сделанные",
    onlyavail: "Только доступные",

    login: "Вход (Cloud)",
    logout: "Выход",
    login_title: "Вход в облако",
    login_sub: "Прогресс сохранится и синхронизируется между устройствами.",
    email_ph: "Email",
    pass_ph: "Пароль",
    signin: "Войти",
    signup: "Создать аккаунт",
    or: "или",
    google_btn: "Войти через Google",
    lg_need: "Введите email и пароль",
    lg_confirm: "Аккаунт создан. Проверьте почту и подтвердите email.",

    c_quest: "Квест",
    c_trader: "Торговец",
    c_lvl: "Ур.",
    c_xp: "XP",
    c_unlocks: "Открывает",
    c_status: "Статус",
    listempty: "Ничего не найдено под фильтры",

    f_types: "Типы квестов",
    f_state: "Состояние",
    i_trader: "Торговец",
    i_xp: "Экспа",
    i_lvl: "Мин. уровень",
    i_map: "Карта",
    i_pre: "Прямых пререквизитов",
    i_ch: "Всего в цепочке",
    i_chxp: "Экспа всей цепочки",
    i_unl: "Открывает далее",
    filters: "☰ Меню",
    ps_search: "Поиск",
    ps_mode: "Версия и охват",
    ps_tools: "Уровень · сезон · тема",
    ps_misc: "Язык и аккаунт",
    done: "Готово ✓",
    undone: "↩ Отменить",
    events: "Ивенты",
    b_event: "ИВЕНТ",

    sync_title: "Найдено два прогресса",
    sync_sub: "Отметки на этом устройстве отличаются от сохранённых в облаке. Какой прогресс — правильный?",
    sync_local: "Это устройство",
    sync_cloud: "Облако",
    sync_local_hint: "перезапишет облако",
    sync_cloud_hint: "перезапишет устройство",
    sync_merge: "✚ Объединить оба (рекомендуется)",
    sync_note: "Объединение сохранит все отметки с обеих сторон — ничего не потеряется.",
    sync_kappa: "Каппы",

    xp_progress: "Общий прогресс",
    nextup: "▶ Дальше",
    resetfilters: "Сбросить фильтры",
    fit_t: "Весь граф",
    objectives: "Цели",
    wiki: "Открыть на вики",
    rs_items: "Нужны предметы",
    rs_goals: "Цели на карте",
    undo_btn: "↩ Отменить",
    toast_done: "Готово",
    toast_undone: "Снято",
    lvl_next: "на {l}-м: +{n} кв.",
    prof_season: "❄ Сезон",
    prof_t: "Профиль прогресса",
    rt_updated: "⇅ Обновлено с другого устройства",
  },

  en: {
    old: "OLD",
    new: "NEW",
    fit: "⤢ Fit view",
    search: "Search quest…",

    required: "Required",
    normal: "Normal",
    junk: "Junk",
    minxp: "Min XP:",
    unlocks: "Unlocks ≥",
    links: "Links",
    theme: "Theme",

    hint: "wheel — zoom · drag — pan · hover/click a quest — highlight its chain",

    s_req: "Required",
    s_prog: "Kappa progress",
    s_junk: "Junk",
    s_total: "Total",
    q: "q.",

    collector: "Collector 1.1.0.0:",
    fencerep: "Fence rep 3",
    level: "Level 40",
    keys: "★ 4 key quests →",
    chain: "in chain",

    v_graph: "Graph",
    v_list: "List",
    v_planner: "Raids",
    kappa: "🎯 Kappa",
    seasonal: "❄ Seasonal +25%",
    mylevel: "My level:",
    mylevel_short: "Lvl",
    hidedone: "Hide done",
    onlyavail: "Available only",

    login: "Login (Cloud)",
    logout: "Logout",
    login_title: "Cloud sign in",
    login_sub: "Your progress will be saved and synced across devices.",
    email_ph: "Email",
    pass_ph: "Password",
    signin: "Sign in",
    signup: "Create account",
    or: "or",
    google_btn: "Continue with Google",
    lg_need: "Enter email and password",
    lg_confirm: "Account created. Check your inbox and confirm your email.",

    c_quest: "Quest",
    c_trader: "Trader",
    c_lvl: "Lvl",
    c_xp: "XP",
    c_unlocks: "Unlocks",
    c_status: "Status",
    listempty: "Nothing matches the filters",

    f_types: "Quest Types",
    f_state: "State",
    i_trader: "Trader",
    i_xp: "XP",
    i_lvl: "Min level",
    i_map: "Map",
    i_pre: "Direct prereqs",
    i_ch: "Chain total",
    i_chxp: "Chain XP",
    i_unl: "Unlocks next",
    filters: "☰ Menu",
    ps_search: "Search",
    ps_mode: "Version & scope",
    ps_tools: "Level · season · theme",
    ps_misc: "Language & account",
    done: "Done ✓",
    undone: "↩ Undo",
    events: "Events",
    b_event: "EVENT",

    sync_title: "Two progress versions found",
    sync_sub: "Progress on this device differs from what's saved in the cloud. Which one is correct?",
    sync_local: "This device",
    sync_cloud: "Cloud",
    sync_local_hint: "will overwrite the cloud",
    sync_cloud_hint: "will overwrite this device",
    sync_merge: "✚ Merge both (recommended)",
    sync_note: "Merging keeps every completed quest from both sides — nothing is lost.",
    sync_kappa: "Kappa",

    xp_progress: "Overall progress",
    nextup: "▶ Next up",
    resetfilters: "Reset filters",
    fit_t: "Fit whole graph",
    objectives: "Objectives",
    wiki: "Open wiki",
    rs_items: "Items needed",
    rs_goals: "Objectives here",
    undo_btn: "↩ Undo",
    toast_done: "Done",
    toast_undone: "Unmarked",
    lvl_next: "at {l}: +{n} q.",
    prof_season: "❄ Season",
    prof_t: "Progress profile",
    rt_updated: "⇅ Updated from another device",
  },
};

const bLabel = { req: "КАППА", seed: "КЛЮЧЕВЫЙ", junk: "МУСОР", normal: "ОБЫЧНЫЙ", event: "ИВЕНТ" };

const bClass = { req: "b-req", seed: "b-seed", junk: "b-junk", normal: "b-norm", event: "b-event" };

const t = (k) => DICT[LANG][k] || k;

const dn = (d) => (LANG === "ru" ? d.nameRu || d.name : d.name);

const TRADER_ORDER = [
  "Prapor",
  "Therapist",
  "Skier",
  "Peacekeeper",
  "Mechanic",
  "Ragman",
  "Jaeger",
  "Ref",
  "Fence",
  "BTR Driver",
  "Lightkeeper",
];

const TC = {
  Prapor: "#e05c5c",
  Therapist: "#59b3a9",
  Skier: "#6c8cff",
  Peacekeeper: "#4dabf7",
  Mechanic: "#b18cff",
  Ragman: "#f0883e",
  Jaeger: "#7fbf5a",
  Fence: "#9aa0a6",
  Ref: "#e07ac0",
  "BTR Driver": "#c9a45b",
  Lightkeeper: "#ffd166",
};

const traders = TRADER_ORDER.filter((t) => DATA.some((d) => d.trader === t)).concat(
  [...new Set(DATA.map((d) => d.trader))].filter((t) => !TRADER_ORDER.includes(t)),
);

const COL_W = 260,
  COL_GAP = 40,
  NODE_W = 240,
  NODE_H = 44,
  ROW_H = 50,
  TOP = 80,
  HEAD = 40;

const JUNK_XP = 12000;

// ---- graph relations ----

const childMap = new Map(DATA.map((d) => [d.id, []]));

DATA.forEach((d) => d.requires.forEach((r) => childMap.get(r) && childMap.get(r).push(d.id)));

function ancestors(id) {
  const s = new Set(),
    st = [id];
  while (st.length) {
    const c = st.pop();
    byId.get(c).requires.forEach((r) => {
      if (byId.has(r) && !s.has(r)) {
        s.add(r);
        st.push(r);
      }
    });
  }
  return s;
}

function descendants(id) {
  const s = new Set(),
    st = [id];
  while (st.length) {
    const c = st.pop();
    childMap.get(c).forEach((k) => {
      if (!s.has(k)) {
        s.add(k);
        st.push(k);
      }
    });
  }
  return s;
}

const depth = new Map();

(function () {
  function dep(id) {
    if (depth.has(id)) return depth.get(id);
    depth.set(id, 0);
    let m = 0;
    byId.get(id).requires.forEach((r) => byId.has(r) && (m = Math.max(m, dep(r) + 1)));
    depth.set(id, m);
    return m;
  }
  DATA.forEach((d) => dep(d.id));
})();

const descCount = new Map(DATA.map((d) => [d.id, descendants(d.id).size]));

function orderTraderList(list) {
  const base = (d) => d.name.split(/\s[-–—]\s/)[0].trim();

  const partNum = (d) => {
    const m = d.name.match(/part\s+(\d+)/i);
    return m ? +m[1] : 0;
  };

  const set = new Set(list.map((d) => d.id));

  const dC = new Map();

  function td(id) {
    if (dC.has(id)) return dC.get(id);
    dC.set(id, 0);
    let m = 0;
    byId.get(id).requires.forEach((r) => {
      if (set.has(r)) m = Math.max(m, td(r) + 1);
    });
    dC.set(id, m);
    return m;
  }

  const groups = new Map();

  list.forEach((d) => {
    const b = base(d);
    if (!groups.has(b)) groups.set(b, []);
    groups.get(b).push(d);
  });

  const blockLevel = new Map(),
    groupOf = new Map(),
    isSeries = new Set();

  groups.forEach((arr, b) => {
    blockLevel.set(b, Math.min(...arr.map((d) => d.minLevel)));
    if (arr.length > 1) isSeries.add(b);
    arr.forEach((d) => groupOf.set(d.id, b));
  });

  const sorted = list.slice().sort((a, b) => {
    const ba = base(a),
      bb = base(b);

    if (ba !== bb) {
      const dl = blockLevel.get(ba) - blockLevel.get(bb);
      if (dl) return dl;
      return ba.localeCompare(bb);
    }

    return (
      a.minLevel - b.minLevel || partNum(a) - partNum(b) || td(a.id) - td(b.id) || dn(a).localeCompare(dn(b))
    );
  });

  return { list: sorted, groupOf, isSeries };
}

const SEED_NAMES = [
  "chemical - part 4",
  "a shooter born in heaven",
  "the tarkov shooter - part 4",
  "sew it good - part 4",
];

const norm = (s) => s.toLowerCase().replace(/[–—-]/g, "-");

const seedIds = new Set(DATA.filter((d) => SEED_NAMES.includes(norm(d.name))).map((d) => d.id));

const newReq = new Set();

seedIds.forEach((id) => {
  newReq.add(id);
  ancestors(id).forEach((a) => newReq.add(a));
});

// ---- mode / status ----

let MODE = "new";

const EVENT_MAPS = new Set(["The Labyrinth", "Icebreaker"]);

const EVENT_IDS = new Set(DATA.filter((d) => EVENT_MAPS.has(d.map)).map((d) => d.id));

function isEvent(d) {
  return EVENT_IDS.has(d.id);
}

function isReq(d) {
  return MODE === "old" ? !!d.kappa : newReq.has(d.id);
}

function isJunk(d) {
  return !isReq(d) && !isEvent(d) && descCount.get(d.id) === 0 && d.exp < JUNK_XP;
}

function status(d) {
  if (isEvent(d)) return "event";
  if (isReq(d)) return seedIds.has(d.id) && MODE === "new" ? "seed" : "req";
  if (isJunk(d)) return "junk";
  return "normal";
}

// ---- STATE ----

const traderOn = new Set(traders);

const F = {
  req: true,
  normal: true,
  junk: false,
  event: false,
  minxp: 0,
  minunlock: 0,
  hidedone: false,
  onlyavail: false,
};

let myLevel = 0;

let scopeKappa = false;

let viewMode = "graph";

let searchQ = "";

// ---- filters persistence ----

const FILTERS_KEY = "eft_kappa_filters";

try {
  const fs = JSON.parse(localStorage.getItem(FILTERS_KEY) || "null");

  if (fs) {
    Object.assign(F, fs.F || {});
    scopeKappa = !!fs.scopeKappa;

    if (Array.isArray(fs.tradersOff)) fs.tradersOff.forEach((tr) => traderOn.delete(tr));

    if (fs.links === false) document.body.classList.remove("links");
  }
} catch (e) {}

function saveFilters() {
  try {
    localStorage.setItem(
      FILTERS_KEY,
      JSON.stringify({
        F,
        scopeKappa,
        links: document.body.classList.contains("links"),
        tradersOff: traders.filter((tr) => !traderOn.has(tr)),
      }),
    );
  } catch (e) {}
}

let seasonal = false;
try {
  seasonal = localStorage.getItem("eft_kappa_seasonal") === "1";
} catch (e) {}
const sx = (v) => Math.round(v * (seasonal ? 1.25 : 1));

// ---- профили прогресса: PVP / PVE / Сезон ----
// У каждого слота свои done и уровень; PVP живёт в легаси-ключах,
// чтобы существующий прогресс пользователей стал PVP-профилем без миграции.

const PROFILES = ["pvp", "pve", "season"];

let activeProfile = "pvp";

try {
  const p = localStorage.getItem("eft_kappa_profile");
  if (PROFILES.includes(p)) activeProfile = p;
} catch (e) {}

const doneKey = (p = activeProfile) => (p === "pvp" ? "eft_kappa_done" : "eft_kappa_done_" + p);
const levelKey = (p = activeProfile) => (p === "pvp" ? "eft_kappa_level" : "eft_kappa_level_" + p);

function readSlot(p) {
  let d = [],
    lvl = 0;
  try {
    d = JSON.parse(localStorage.getItem(doneKey(p)) || "[]");
  } catch (e) {}
  try {
    lvl = +localStorage.getItem(levelKey(p)) || 0;
  } catch (e) {}
  return { done: d, mylevel: lvl };
}

function writeSlot(p, slot) {
  try {
    localStorage.setItem(doneKey(p), JSON.stringify(slot.done || []));
    localStorage.setItem(levelKey(p), slot.mylevel || 0);
  } catch (e) {}
}

let done = new Set();

function loadProfileLocal() {
  const s = readSlot(activeProfile);
  done = new Set(s.done);
  myLevel = s.mylevel;
}

loadProfileLocal();

const saveLocal = () => {
  localStorage.setItem(doneKey(), JSON.stringify([...done]));
};

let persist = saveLocal;

// отметка каскадная (закрывает пререквизиты / снимает потомков) —
// одно случайное касание меняет много квестов, поэтому даём «Отменить»
let undoSnap = null,
  undoTimer = null;

function showToast(msg, withUndo = true) {
  const el = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  document.getElementById("toastUndo").style.display = withUndo ? "" : "none";
  if (!withUndo) undoSnap = null;
  el.style.display = "flex";
  clearTimeout(undoTimer);
  undoTimer = setTimeout(() => {
    el.style.display = "none";
    undoSnap = null;
  }, 5000);
}

function toggleDone(id) {
  undoSnap = new Set(done);

  const marking = !done.has(id);

  if (!marking) {
    done.delete(id);
    descendants(id).forEach((x) => done.delete(x));
  } else {
    done.add(id);
    ancestors(id).forEach((x) => done.add(x));
  }

  persist();

  const extra = Math.abs(done.size - undoSnap.size) - 1;
  showToast(
    `${marking ? t("toast_done") : t("toast_undone")}: ${dn(byId.get(id))}${extra > 0 ? ` (+${extra})` : ""}`,
  );
}

function available(d) {
  return d.requires.every((r) => done.has(r));
}

function aboveLevel(d) {
  return myLevel > 0 && d.minLevel > myLevel;
}

// ---- legend ----

const legend = document.getElementById("legend");

traders.forEach((tr) => {
  const el = document.createElement("div");
  el.className = "legend-item";

  el.innerHTML = `<span class="sw" style="background:${TC[tr] || "#888"}"></span><span data-t="${tr}">${t(tr)}</span>`;

  el.style.opacity = traderOn.has(tr) ? 1 : 0.4;

  el.onclick = () => {
    if (traderOn.has(tr)) {
      traderOn.delete(tr);
      el.style.opacity = 0.4;
    } else {
      traderOn.add(tr);
      el.style.opacity = 1;
    }
    draw();
  };

  legend.appendChild(el);
});

function updateStats() {
  const req = DATA.filter(isReq);

  const doneReq = req.reduce((n, d) => n + (done.has(d.id) ? 1 : 0), 0);

  const pct = req.length > 0 ? Math.round((doneReq / req.length) * 100) : 0;

  document.getElementById("stats").innerHTML =
    `${t("s_prog")}: <b class="g">${pct}%</b> (${doneReq} / ${req.length} ${t("q")})`;

  // общий прогресс по экспе — тонкая полоса под шапкой
  let totalXP = 0,
    earnedXP = 0,
    doneCnt = 0;

  DATA.forEach((d) => {
    const xp = sx(d.exp);
    totalXP += xp;
    if (done.has(d.id)) {
      earnedXP += xp;
      doneCnt++;
    }
  });

  const xpPct = totalXP ? (earnedXP / totalXP) * 100 : 0;
  const fmt = (v) => v.toLocaleString(LANG === "ru" ? "ru-RU" : "en-US");

  document.getElementById("xpbar-fill").style.width = xpPct.toFixed(2) + "%";
  document.getElementById("xpbar").title =
    `${t("xp_progress")}: ${doneCnt} / ${DATA.length} ${t("q")} · ${fmt(earnedXP)} / ${fmt(totalXP)} XP (${Math.round(xpPct)}%)`;

  const strip = document.getElementById("reqstrip");

  if (MODE === "new") {
    strip.style.display = "flex";

    strip.innerHTML =
      `<b>${t("collector")}</b>` +
      `<span class="pill">LL4: ${["Therapist", "Prapor", "Peacekeeper", "Mechanic", "Jaeger", "Skier", "Ragman"].map((x) => t(x)).join(" · ")}</span>` +
      `<span class="pill">${t("fencerep")}</span><span class="pill">${t("level")}</span>` +
      `<span class="pill">${t("keys")} ${newReq.size} ${t("chain")}</span>`;
  } else strip.style.display = "none";
}

function visible(d) {
  if (!traderOn.has(d.trader)) return false;

  if (scopeKappa && !isReq(d)) return false;

  if (F.hidedone && done.has(d.id)) return false;

  if (F.onlyavail && !available(d)) return false;

  const st = status(d);

  if (st === "event" && !F.event) return false;

  if ((st === "req" || st === "seed") && !F.req) return false;

  if (st === "junk" && !F.junk) return false;

  if (st === "normal" && !F.normal) return false;

  if (d.exp < F.minxp) return false;

  return true;
}

const gLanes = document.getElementById("lanes"),
  gEdges = document.getElementById("edges"),
  gNodes = document.getElementById("nodes");

const nodeEls = new Map();
let edgeEls = [];
let LW = 0,
  LH = 0;

let _firstRender = true;

function orthPath(sx, sy, ex, ey, cx) {
  if (Math.abs(sy - ey) < 0.5) return `M${sx},${sy} L${ex},${ey}`;

  const r = Math.max(0, Math.min(8, Math.abs(ey - sy) / 2, Math.abs(cx - sx), Math.abs(ex - cx)));

  const d1 = cx >= sx ? 1 : -1,
    d2 = ex >= cx ? 1 : -1,
    vy = ey > sy ? 1 : -1;

  return `M${sx},${sy} L${cx - d1 * r},${sy} Q${cx},${sy} ${cx},${sy + vy * r} L${cx},${ey - vy * r} Q${cx},${ey} ${cx + d2 * r},${ey} L${ex},${ey}`;
}

function render() {
  const savedTx = tx,
    savedTy = ty,
    savedK = k;

  gLanes.innerHTML = "";
  gEdges.innerHTML = "";
  gNodes.innerHTML = "";
  nodeEls.clear();
  edgeEls = [];
  mmNodes = [];

  const pos = new Map();
  let maxColH = 0;

  let currentX = 20; // some left padding

  traders.forEach((tr) => {
    const { list, groupOf, isSeries } = orderTraderList(DATA.filter((d) => d.trader === tr && visible(d)));

    if (!list.length) return;

    // Determine if we need 2 columns (e.g. if list length > 12)

    const use2Cols = list.length > 12;

    let y1 = TOP,
      y2 = TOP;

    let prev1 = null,
      prev2 = null;

    let lastCol = 1;

    const x1 = currentX;

    const x2 = currentX + COL_W + COL_GAP;

    list.forEach((d) => {
      const g = groupOf.get(d.id);

      let col = 1;

      if (use2Cols) {
        if (lastCol === 1 && prev1 !== g && y1 > TOP) col = 2;
        else if (lastCol === 2 && prev2 !== g) col = 1;
        else col = lastCol;
      }

      if (col === 1) {
        if (prev1 !== null && g !== prev1 && (isSeries.has(g) || isSeries.has(prev1))) y1 += 16;

        pos.set(d.id, { x: x1, y: y1, col: 1 });

        y1 += ROW_H;

        prev1 = g;

        lastCol = 1;
      } else {
        if (prev2 !== null && g !== prev2 && (isSeries.has(g) || isSeries.has(prev2))) y2 += 16;

        pos.set(d.id, { x: x2, y: y2, col: 2 });

        y2 += ROW_H;

        prev2 = g;

        lastCol = 2;
      }
    });

    const colBottom = Math.max(y1, y2);

    maxColH = Math.max(maxColH, colBottom);

    const laneWidth = use2Cols ? COL_W * 2 + COL_GAP : COL_W;

    const lane = document.createElementNS(SVGNS, "rect");
    lane.setAttribute("class", "collane");

    lane.setAttribute("x", currentX - 10);
    lane.setAttribute("y", TOP - 50);
    lane.setAttribute("width", laneWidth + 20);
    lane.setAttribute("height", colBottom - TOP + 60);
    lane.setAttribute("rx", 12);

    gLanes.appendChild(lane);

    const hg = document.createElementNS(SVGNS, "g");
    hg.setAttribute("class", "colhead");

    const ht = document.createElementNS(SVGNS, "text");
    ht.setAttribute("x", currentX + laneWidth / 2);
    ht.setAttribute("y", TOP - 30);
    ht.setAttribute("text-anchor", "middle");
    ht.setAttribute("fill", TC[tr] || "#888");
    ht.textContent = t(tr);
    hg.appendChild(ht);

    const hc = document.createElementNS(SVGNS, "text");
    hc.setAttribute("class", "cnt");
    hc.setAttribute("x", currentX + laneWidth / 2);
    hc.setAttribute("y", TOP - 14);
    hc.setAttribute("text-anchor", "middle");
    hc.textContent = `${list.length} ${t("q")}`;
    hg.appendChild(hc);

    gLanes.appendChild(hg);

    currentX += laneWidth + COL_GAP + 40; // extra padding between traders
  });

  LW = currentX;
  LH = Math.max(400, maxColH + 60);

  DATA.forEach((d) => {
    if (!pos.has(d.id)) return;

    d.requires.forEach((r) => {
      if (!pos.has(r)) return;

      const a = pos.get(r),
        b = pos.get(d.id);

      const ey1 = a.y + NODE_H / 2,
        ey2 = b.y + NODE_H / 2;

      const p = document.createElementNS(SVGNS, "path");

      // Orthogonal (H–V–H) routing with rounded corners; vertical jog in a side channel.

      let sx, ex, cx;

      if (a.x === b.x) {
        sx = a.x;
        ex = a.x;
        cx = a.x - Math.min(34, 14 + Math.abs(ey2 - ey1) * 0.12);
      } else if (a.x < b.x) {
        sx = a.x + NODE_W;
        ex = b.x;
        cx = (sx + ex) / 2;
      } else {
        sx = a.x;
        ex = b.x + NODE_W;
        cx = (sx + ex) / 2;
      }

      p.setAttribute("d", orthPath(sx, ey1, ex, ey2, cx));

      p.dataset.a = r;
      p.dataset.b = d.id;

      gEdges.appendChild(p);
      edgeEls.push(p);
    });
  });

  DATA.forEach((d) => {
    if (!pos.has(d.id)) return;

    const c = pos.get(d.id);

    const g = document.createElementNS(SVGNS, "g");

    let stt = status(d);

    let classes = "node " + stt;

    if (done.has(d.id)) classes += " ndone";
    else if (available(d)) classes += " navail";

    if (aboveLevel(d)) classes += " nhigher";

    g.setAttribute("class", classes);

    g.setAttribute("transform", `translate(${c.x},${c.y})`);

    g.dataset.id = d.id;

    const rect = document.createElementNS(SVGNS, "rect");
    rect.setAttribute("class", "bg");

    rect.setAttribute("width", NODE_W);
    rect.setAttribute("height", NODE_H);
    rect.setAttribute("rx", 8);

    g.appendChild(rect);

    const bar = document.createElementNS(SVGNS, "rect");
    bar.setAttribute("class", "bar");

    bar.setAttribute("x", 6);
    bar.setAttribute("y", 6);
    bar.setAttribute("width", 4);
    bar.setAttribute("height", NODE_H - 12);

    bar.setAttribute("rx", 2);
    bar.setAttribute("fill", TC[d.trader] || "#888");

    g.appendChild(bar);

    const nm = document.createElementNS(SVGNS, "text");
    nm.setAttribute("class", "nm");

    nm.setAttribute("x", 18);
    nm.setAttribute("y", NODE_H / 2 - 4);

    nm.textContent = dn(d).length > 35 ? dn(d).slice(0, 34) + "…" : dn(d);

    g.appendChild(nm);

    const met = document.createElementNS(SVGNS, "text");
    met.setAttribute("class", "meta");

    met.setAttribute("x", 18);
    met.setAttribute("y", NODE_H / 2 + 12);

    let metaTxt = `${sx(d.exp).toLocaleString("ru-RU")} XP`;

    if (d.minLevel > 0) metaTxt += ` · ${t("c_lvl")} ${d.minLevel}`;

    met.textContent = metaTxt;

    g.appendChild(met);

    gNodes.appendChild(g);
    nodeEls.set(d.id, g);
    mmNodes.push({ id: d.id, x: c.x, y: c.y, st: stt, done: done.has(d.id) });
  });

  document.getElementById("graphEmpty").style.display = nodeEls.size ? "none" : "flex";

  drawMinimap();

  if (_firstRender) {
    fit();
    _firstRender = false;
  } else {
    tx = savedTx;
    ty = savedTy;
    k = savedK;
    LW = currentX;
    LH = Math.max(400, maxColH + 60);
    apply();
  }
}

let pinned = null;

function highlight(id) {
  const anc = ancestors(id),
    desc = descendants(id),
    keep = new Set([id, ...anc, ...desc]);

  if (pinned && nodeEls.has(pinned)) {
    nodeEls.get(pinned).classList.add("sel");
  }

  nodeEls.forEach((g, nid) => g.classList.toggle("dim", !keep.has(nid)));

  edgeEls.forEach((p) => {
    const on = keep.has(p.dataset.a) && keep.has(p.dataset.b);
    p.classList.toggle("hl", on);
  });
}

function clearHi() {
  nodeEls.forEach((g) => g.classList.remove("dim"));
  edgeEls.forEach((p) => p.classList.remove("hl"));
}

// Лёгкое обновление после отметки «сделано»: не пересоздаём DOM графа,
// только пересчитываем классы состояний. Трансформация зума не трогается.
function refreshNodeStates() {
  nodeEls.forEach((g, id) => {
    const d = byId.get(id);

    let classes = "node " + status(d);

    if (done.has(id)) classes += " ndone";
    else if (available(d)) classes += " navail";

    if (aboveLevel(d)) classes += " nhigher";

    if (g.classList.contains("dim")) classes += " dim";
    if (g.classList.contains("sel")) classes += " sel";

    g.setAttribute("class", classes);
  });

  mmNodes.forEach((n) => (n.done = done.has(n.id)));
  drawMinimap();
}

function drawAfterDone() {
  // фильтры по состоянию меняют состав графа — там нужен полный рендер
  if (viewMode === "graph" && !F.hidedone && !F.onlyavail) refreshNodeStates();
  else draw();
}

const OBJ_ICON = {
  kill: "⌖",
  find: "◈",
  collect: "◈",
  place: "◎",
  plant: "◎",
  mark: "✦",
  key: "🗝",
  visit: "➤",
  extract: "⇱",
  build: "⚙",
  skill: "↑",
  experience: "↑",
  reputation: "↑",
};

function showInfo(id) {
  const d = byId.get(id);

  const anc = ancestors(id);

  const chainXP = [...anc].reduce((s, x) => s + byId.get(x).exp, 0);

  const info = document.getElementById("info");

  const stt = status(d);

  let html = `<button class="btn-done ${done.has(d.id) ? "is-done" : ""}" data-act="done" data-id="${d.id}">${done.has(d.id) ? t("undone") : t("done")}</button>`;

  html += `<span class="badge b-${stt}">${bLabel[stt]}</span>`;

  html += `<h2>${dn(d)}</h2>`;

  html += `<div class="row"><span>${t("i_trader")}</span><span style="color:${TC[d.trader]}">${t(d.trader)}</span></div>`;

  html += `<div class="row"><span>${t("i_xp")}</span><span class="g">${sx(d.exp).toLocaleString("ru-RU")} XP</span></div>`;

  html += `<div class="row"><span>${t("i_lvl")}</span><span>${d.minLevel || "—"}</span></div>`;

  if (d.map) html += `<div class="row"><span>${t("i_map")}</span><span>${d.map}</span></div>`;

  html += `<div class="row"><span>${t("i_pre")}</span><span>${d.requires.length}</span></div>`;

  html += `<div class="row"><span>${t("i_ch")}</span><span>${anc.size}</span></div>`;

  html += `<div class="row"><span>${t("i_chxp")}</span><span class="g">${sx(chainXP + d.exp).toLocaleString("ru-RU")} XP</span></div>`;

  html += `<div class="row"><span>${t("i_unl")}</span><span>${(childMap.get(id) || []).length}</span></div>`;

  // цели квеста — короткие таргеты, без лора
  if (d.objectives && d.objectives.length) {
    html += `<div class="obj-title">${t("objectives")}</div><div class="objs">`;

    d.objectives.forEach((o) => {
      html +=
        `<div class="obj${o.optional ? " obj-opt" : ""}"><span class="obj-ic">${OBJ_ICON[o.type] || "•"}</span>` +
        `<span class="obj-tx">${LANG === "ru" && o.ru ? o.ru : o.en}</span>` +
        (o.count ? `<span class="obj-n">×${o.count}</span>` : "") +
        (o.fir ? `<span class="obj-fir">FiR</span>` : "") +
        `</div>`;
    });

    html += `</div>`;
  }

  if (d.wiki) {
    html += `<a class="wiki-link" href="${d.wiki}" target="_blank" rel="noopener">📖 ${t("wiki")} ↗</a>`;
  }

  const pList = orderListHTML(id);

  if (pList.length > 0) {
    html += `<div class="todo">`;

    pList.forEach((p) => {
      const pd = byId.get(p);

      html += `<div class="t-row ${done.has(p) ? "tdone" : ""}">

  <input type="checkbox" ${done.has(p) ? "checked" : ""} data-act="done" data-id="${p}">

  <span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${dn(pd)}</span>

</div>`;
    });

    html += `</div>`;
  }

  document.getElementById("infoBody").innerHTML = html;

  info.style.display = "block";
}

function orderListHTML(id) {
  const anc = Array.from(ancestors(id));

  return anc.sort((a, b) => depth.get(a) - depth.get(b));
}

gNodes.addEventListener("mouseover", (e) => {
  const g = e.target.closest(".node");
  if (g && !pinned) highlight(g.dataset.id);
});

gNodes.addEventListener("mouseout", (e) => {
  if (!pinned && e.target.closest(".node")) clearHi();
});

// Robust click handler: track pointer movement to distinguish clicks from drags.

// Use elementsFromPoint to detect node under pointer even when #info panel overlaps.

let _clickStart = null;

let _lastTap = null;

function handleNodeClick(cx, cy) {
  const infoEl = document.getElementById("info");

  const wasVis = infoEl.style.display === "block";

  if (wasVis) infoEl.style.display = "none";

  const els = document.elementsFromPoint(cx, cy);

  if (wasVis) infoEl.style.display = "block";

  const g = els.find((el) => el.closest && el.closest(".node"));

  if (!g) return;

  const nodeG = g.closest(".node");

  if (!nodeG) return;

  const id = nodeG.dataset.id;

  if (pinned === id) {
    pinned = null;
    nodeG.classList.remove("sel");
    clearHi();
    infoEl.style.display = "none";
    return;
  }

  nodeEls.forEach((n) => n.classList.remove("sel"));

  nodeG.classList.add("sel");

  pinned = id;
  highlight(id);
  showInfo(id);
}

document.getElementById("stage").addEventListener("pointerdown", (e) => {
  if (viewMode !== "graph") return;

  if (e.target.closest("#info") || e.target.closest("#minimap")) return;

  _clickStart = { x: e.clientX, y: e.clientY, id: e.pointerId };
});

document.getElementById("stage").addEventListener("pointerup", (e) => {
  if (!_clickStart || _clickStart.id !== e.pointerId) return;

  if (e.target.closest("#info") || e.target.closest("#minimap")) {
    _clickStart = null;
    return;
  }

  const dx = e.clientX - _clickStart.x,
    dy = e.clientY - _clickStart.y;

  const cs = _clickStart;
  _clickStart = null;

  if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
    // двойной тап на таче — зум к точке (и не разворачивает клик по узлу)
    const now = Date.now();

    if (
      e.pointerType === "touch" &&
      _lastTap &&
      now - _lastTap.t < 350 &&
      Math.hypot(e.clientX - _lastTap.x, e.clientY - _lastTap.y) < 40
    ) {
      _lastTap = null;
      const r = stage.getBoundingClientRect();
      zoomAt(e.clientX - r.left, e.clientY - r.top, 1.8);
      return;
    }

    _lastTap = { t: now, x: e.clientX, y: e.clientY };
    handleNodeClick(e.clientX, e.clientY);
  }
});

document.getElementById("infoClose").onclick = () => {
  document.getElementById("info").style.display = "none";
  if (pinned) {
    nodeEls.get(pinned)?.classList.remove("sel");
    pinned = null;
    clearHi();
  }
};

document.getElementById("infoBody").addEventListener("click", (e) => {
  const el = e.target.closest('[data-act="done"]');
  if (!el) return;

  toggleDone(el.dataset.id);
  updateStats();
  drawAfterDone();
  if (pinned) showInfo(pinned);
});

// ---- LIST VIEW ----

const listEl = document.getElementById("list");

let sortKey = "lvl",
  sortDir = 1;

function renderList() {
  const rows = DATA.filter((d) => visible(d) && (!searchQ || matchName(d, searchQ))).sort((a, b) => {
    let va, vb;

    if (sortKey === "name") {
      va = dn(a);
      vb = dn(b);
    } else if (sortKey === "trader") {
      va = a.trader;
      vb = b.trader;
    } else if (sortKey === "lvl") {
      va = a.minLevel;
      vb = b.minLevel;
    } else if (sortKey === "xp") {
      va = a.exp;
      vb = b.exp;
    } else if (sortKey === "unlocks") {
      va = descCount.get(a.id) || 0;
      vb = descCount.get(b.id) || 0;
    } else if (sortKey === "status") {
      va = status(a);
      vb = status(b);
    }

    if (va < vb) return -1 * sortDir;

    if (va > vb) return 1 * sortDir;

    return 0;
  });

  let html = `<table class="qt"><thead><tr>

    <th width="40"></th>

    <th data-sort="name">${t("c_quest")} ${sortKey === "name" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>

    <th data-sort="trader">${t("c_trader")} ${sortKey === "trader" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>

    <th data-sort="lvl" class="num">${t("c_lvl")} ${sortKey === "lvl" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>

    <th data-sort="xp" class="num">${t("c_xp")} ${sortKey === "xp" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>

    <th data-sort="unlocks" class="num">${t("c_unlocks")} ${sortKey === "unlocks" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>

    <th data-sort="status">${t("c_status")} ${sortKey === "status" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>

  </tr></thead><tbody>`;

  if (!rows.length)
    html += `<tr><td colspan="7" class="empty">${t("listempty")}<br /><button class="btn reset-filters">${t("resetfilters")}</button></td></tr>`;

  rows.forEach((d) => {
    const stt = status(d);

    const isDone = done.has(d.id);

    const av = available(d);

    let cls = "qr";

    if (isDone) cls += " dim";

    html += `<tr class="${cls}" data-id="${d.id}">

<td class="cdone"><input type="checkbox" data-act="done" data-id="${d.id}" ${isDone ? "checked" : ""}></td>

<td style="font-weight:600"><span style="display:inline-block;width:4px;height:12px;background:${TC[d.trader]};margin-right:6px"></span>${av && !isDone ? '<span style="color:var(--good)">▸</span> ' : ""}${dn(d)}</td>

<td style="color:${TC[d.trader]}">${t(d.trader)}</td>

<td class="num">${d.minLevel}</td>

<td class="num">${sx(d.exp).toLocaleString("ru-RU")}</td>

<td class="num">${descCount.get(d.id) || ""}</td>

<td><span class="badge b-${stt}">${bLabel[stt]}</span></td>

    </tr>`;
  });

  html += `</tbody></table>`;

  listEl.innerHTML = html;
}

listEl.addEventListener("click", (e) => {
  const cb = e.target.closest('input[data-act="done"]');

  if (cb) {
    const st = listEl.scrollTop;
    toggleDone(cb.dataset.id);
    updateStats();
    draw();
    listEl.scrollTop = st;
    if (pinned === cb.dataset.id) showInfo(pinned);
    return;
  }

  const th = e.target.closest("th[data-sort]");

  if (th) {
    const k = th.dataset.sort;
    if (sortKey === k) sortDir *= -1;
    else {
      sortKey = k;
      sortDir = 1;
    }
    renderList();
    return;
  }

  const tr = e.target.closest(".qr");

  if (tr) {
    pinned = tr.dataset.id;
    showInfo(tr.dataset.id);
  }
});

// ---- RAID PLANNER ----

const plannerEl = document.getElementById("planner");

let activeMap = null;

// Сводка по карте: агрегированные предметы и цели из ДОСТУПНЫХ квестов,
// без привязки к конкретному квесту. Одинаковые таргеты суммируются.
const ITEM_OBJ_TYPES = new Set(["find", "collect", "key"]);

function raidSummaryHTML(quests) {
  const items = new Map(),
    goals = new Map();

  quests
    .filter((q) => available(q) && q.objectives)
    .forEach((q) => {
      q.objectives.forEach((o) => {
        if (o.optional) return;

        const bucket = ITEM_OBJ_TYPES.has(o.type) ? items : goals;
        const txt = LANG === "ru" && o.ru ? o.ru : o.en;
        const key = txt + (o.fir ? "|fir" : "");

        const cur = bucket.get(key) || { txt, type: o.type, fir: !!o.fir, count: 0 };
        cur.count += o.count || 1;
        bucket.set(key, cur);
      });
    });

  if (!items.size && !goals.size) return "";

  const rows = (m) =>
    [...m.values()]
      .map(
        (v) =>
          `<div class="obj"><span class="obj-ic">${OBJ_ICON[v.type] || "•"}</span>` +
          `<span class="obj-tx">${v.txt}</span>` +
          (v.count > 1 ? `<span class="obj-n">×${v.count}</span>` : "") +
          (v.fir ? `<span class="obj-fir">FiR</span>` : "") +
          `</div>`,
      )
      .join("");

  let h = `<div class="raid-summary">`;

  if (items.size) h += `<div class="obj-title">◈ ${t("rs_items")}</div><div class="objs">${rows(items)}</div>`;
  if (goals.size) h += `<div class="obj-title">⌖ ${t("rs_goals")}</div><div class="objs">${rows(goals)}</div>`;

  h += `</div>`;
  return h;
}

function renderPlanner() {
  const avail = DATA.filter((d) => visible(d) && !done.has(d.id));

  const maps = {};

  const global = [];

  avail.forEach((d) => {
    if (!d.map || d.map === "any" || d.map.toLowerCase() === "global" || d.map.toLowerCase() === "any") {
      global.push(d);

      return;
    }

    const mapName = d.map;

    if (!maps[mapName]) maps[mapName] = { quests: [], xp: 0 };

    maps[mapName].quests.push(d);

    maps[mapName].xp += d.exp;
  });

  const sortedMaps = Object.keys(maps)
    .map((k) => ({ name: k, ...maps[k] }))
    .sort((a, b) => b.xp - a.xp);

  // Set default active

  if (!activeMap) {
    if (sortedMaps.length > 0) activeMap = sortedMaps[0].name;
    else if (global.length > 0) activeMap = "global";
  }

  let html = `<div class="planner-layout">`;

  // LEFT SIDEBAR: MAPS

  html += `<div class="planner-sidebar">`;

  html += `<div class="side-title">${t("v_planner")}</div>`;

  if (global.length > 0) {
    const isAct = activeMap === "global" ? "active" : "";

    html += `<div class="map-btn ${isAct}" data-map="global">

<div class="m-nm">📌 Фоновые квесты</div>

<div class="m-st">${global.length} ${t("q")}</div>

    </div>`;
  }

  sortedMaps.forEach((m) => {
    const isAct = activeMap === m.name ? "active" : "";

    html += `<div class="map-btn ${isAct}" data-map="${m.name}">

<div class="m-nm">${t(m.name)}</div>

<div class="m-st">${m.quests.length} ${t("q")} · <b>${sx(m.xp).toLocaleString("ru-RU")} XP</b></div>

    </div>`;
  });

  if (sortedMaps.length === 0 && global.length === 0) {
    html += `<div class="planner-empty">${t("listempty")}<br /><button class="btn reset-filters">${t("resetfilters")}</button></div>`;
  }

  html += `</div>`;

  // RIGHT CONTENT

  html += `<div class="planner-content">`;

  if (activeMap === "global" && global.length > 0) {
    html += `<div class="active-map-panel">

<div class="am-header">

  <h1>📌 Фоновые / Пассивные задачи</h1>

  <div class="am-sub">${global.length} ${t("q")}</div>

</div>

<div class="am-list">`;

    global.forEach((q) => {
      html += `<div class="am-quest ${!available(q) ? "dim" : ""}" data-id="${q.id}">

  <input type="checkbox" ${done.has(q.id) ? "checked" : ""} data-act="done" data-id="${q.id}">

  <div class="amq-info">

    <div class="amq-name">${dn(q)}</div>

    <div class="amq-meta"><span style="color:${TC[q.trader]}">${t(q.trader)}</span> · ${sx(q.exp).toLocaleString("ru-RU")} XP</div>

  </div>

</div>`;
    });

    html += raidSummaryHTML(global);

    html += `</div></div>`;
  } else if (activeMap && maps[activeMap]) {
    const m = maps[activeMap];

    html += `<div class="active-map-panel">

<div class="am-header">

  <h1>${t(activeMap)}</h1>

  <div class="am-sub">${m.quests.length} ${t("q")} · <b style="color:var(--gold)">${sx(m.xp).toLocaleString("ru-RU")} XP</b></div>

</div>

<div class="am-list">`;

    m.quests.forEach((q) => {
      html += `<div class="am-quest ${!available(q) ? "dim" : ""}" data-id="${q.id}">

  <input type="checkbox" ${done.has(q.id) ? "checked" : ""} data-act="done" data-id="${q.id}">

  <div class="amq-info">

    <div class="amq-name">${dn(q)}</div>

    <div class="amq-meta"><span style="color:${TC[q.trader]}">${t(q.trader)}</span> · ${sx(q.exp).toLocaleString("ru-RU")} XP</div>

  </div>

</div>`;
    });

    html += raidSummaryHTML(m.quests);

    html += `</div></div>`;
  }

  html += `</div></div>`;

  plannerEl.innerHTML = html;
}

plannerEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".map-btn");

  if (btn) {
    activeMap = btn.dataset.map;
    renderPlanner();
    return;
  }

  const cb = e.target.closest('input[data-act="done"]');

  if (cb) {
    const list = plannerEl.querySelector(".am-list");
    const st = list ? list.scrollTop : 0;
    toggleDone(cb.dataset.id);
    updateStats();
    draw();
    const nl = plannerEl.querySelector(".am-list");
    if (nl) nl.scrollTop = st;
    if (pinned === cb.dataset.id) showInfo(pinned);
    return;
  }

  const row = e.target.closest(".am-quest");
  if (row && row.dataset.id) {
    pinned = row.dataset.id;
    showInfo(row.dataset.id);
  }
});

function draw() {
  saveFilters();

  if (viewMode === "list") renderList();
  else if (viewMode === "planner") renderPlanner();
  else render();
}

addEventListener("keydown", (e) => {
  if (e.key === "Escape") document.getElementById("infoClose").onclick();
});

// ---- pan/zoom ----

let tx = 0,
  ty = 0,
  k = 1;
const stage = document.getElementById("stage"),
  view = document.getElementById("view");

const apply = () => {
  view.setAttribute("transform", `translate(${tx},${ty}) scale(${k})`);
  updateMMView();
};

let userAdjustedView = false; // ручной пан/зум отключает авто-подгонку при resize

function fit() {
  const r = stage.getBoundingClientRect(),
    pad = 70;
  k = Math.min((r.width - pad) / LW, (r.height - pad) / LH, 1);
  if (!isFinite(k) || k <= 0) k = 0.5;
  tx = (r.width - LW * k) / 2;
  ty = (r.height - LH * k) / 2;
  userAdjustedView = false;
  apply();
}

let _resizeT = null;

addEventListener("resize", () => {
  clearTimeout(_resizeT);
  _resizeT = setTimeout(() => {
    if (viewMode === "graph" && !userAdjustedView) fit();
  }, 200);
});

const clampK = (v) => Math.max(0.06, Math.min(4, v));

function zoomAt(mx, my, f) {
  const nk = clampK(k * f);
  tx = mx - (mx - tx) * (nk / k);
  ty = my - (my - ty) * (nk / k);
  k = nk;
  userAdjustedView = true;
  apply();
}

stage.addEventListener(
  "wheel",
  (e) => {
    if (viewMode !== "graph") return;
    if (e.target.closest("#info") || e.target.closest("#minimap")) return;
    e.preventDefault();
    const r = stage.getBoundingClientRect();
    zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.12 : 1 / 1.12);
  },
  { passive: false },
);

let pts = new Map(),
  panP = null,
  pinch = null;

stage.addEventListener("pointerdown", (e) => {
  if (viewMode !== "graph") return;

  if (e.target.closest("#info") || e.target.closest("#minimap")) return;

  pts.set(e.pointerId, e);

  if (pts.size === 1) {
    panP = { x: e.clientX, y: e.clientY, tx, ty };
    pinch = null;
    stage.classList.add("drag");
  } else if (pts.size === 2) {
    const p = Array.from(pts.values());
    pinch = { d: Math.hypot(p[0].clientX - p[1].clientX, p[0].clientY - p[1].clientY), k };
    panP = null;
  }
});

stage.addEventListener("pointermove", (e) => {
  if (!pts.has(e.pointerId)) return;
  pts.set(e.pointerId, e);

  if (pts.size === 1 && panP) {
    tx = panP.tx + (e.clientX - panP.x);
    ty = panP.ty + (e.clientY - panP.y);
    userAdjustedView = true;
    apply();
  } else if (pts.size === 2 && pinch) {
    const p = Array.from(pts.values());
    const nd = Math.hypot(p[0].clientX - p[1].clientX, p[0].clientY - p[1].clientY);

    const nk = clampK(pinch.k * (nd / pinch.d));
    const mx = (p[0].clientX + p[1].clientX) / 2,
      my = (p[0].clientY + p[1].clientY) / 2;

    const r = stage.getBoundingClientRect();
    zoomAt(mx - r.left, my - r.top, nk / k);
  }
});

const endPtr = (e) => {
  pts.delete(e.pointerId);
  if (pts.size === 1) {
    const p = Array.from(pts.values())[0];
    panP = { x: p.clientX, y: p.clientY, tx, ty };
    pinch = null;
  } else if (pts.size === 0) {
    panP = null;
    stage.classList.remove("drag");
  }
};

stage.addEventListener("pointerup", endPtr);
stage.addEventListener("pointercancel", endPtr);

// ---- MINIMAP ----

const MM_W = 180,
  MM_MAXH = 120;

const mmWrap = document.getElementById("minimap"),
  mmCanvas = document.getElementById("mmCanvas"),
  mmView = document.getElementById("mmView");

let mmScale = 1,
  mmNodes = [];

let stageW = 0,
  stageH = 0;

new ResizeObserver(() => {
  const r = stage.getBoundingClientRect();
  stageW = r.width;
  stageH = r.height;
  updateMMView();
}).observe(stage);

function drawMinimap() {
  if (!mmNodes.length || !LW || !LH) {
    mmWrap.style.display = "none";
    return;
  }

  mmWrap.style.display = "block";

  mmScale = Math.min(MM_W / LW, MM_MAXH / LH);

  const w = Math.max(40, Math.round(LW * mmScale)),
    h = Math.max(30, Math.round(LH * mmScale));

  const dpr = window.devicePixelRatio || 1;
  mmCanvas.width = w * dpr;
  mmCanvas.height = h * dpr;
  mmCanvas.style.width = w + "px";
  mmCanvas.style.height = h + "px";

  const ctx = mmCanvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  const cs = getComputedStyle(document.documentElement);
  const C = {
    req: cs.getPropertyValue("--gold").trim() || "#e8c15a",
    seed: cs.getPropertyValue("--gold2").trim() || "#ffe08a",
    event: cs.getPropertyValue("--event").trim() || "#a066ff",
    done: cs.getPropertyValue("--good").trim() || "#63c088",
    normal: "#71715f",
    junk: "#43432f",
  };

  const nw = Math.max(2, NODE_W * mmScale),
    nh = Math.max(1.5, NODE_H * mmScale);

  mmNodes.forEach((n) => {
    ctx.globalAlpha = n.done ? 0.4 : 0.95;
    ctx.fillStyle = n.done ? C.done : C[n.st] || C.normal;
    ctx.fillRect(n.x * mmScale, n.y * mmScale, nw, nh);
  });

  ctx.globalAlpha = 1;
  updateMMView();
}

function updateMMView() {
  if (!LW || !mmNodes.length) return;

  mmView.style.left = (-tx / k) * mmScale + "px";
  mmView.style.top = (-ty / k) * mmScale + "px";
  mmView.style.width = (stageW / k) * mmScale + "px";
  mmView.style.height = (stageH / k) * mmScale + "px";
}

let mmDrag = false;

function mmNavigate(e) {
  const r = mmCanvas.getBoundingClientRect();

  tx = stageW / 2 - ((e.clientX - r.left) / mmScale) * k;
  ty = stageH / 2 - ((e.clientY - r.top) / mmScale) * k;
  userAdjustedView = true;
  apply();
}

mmWrap.addEventListener("pointerdown", (e) => {
  mmDrag = true;
  mmWrap.setPointerCapture(e.pointerId);
  mmNavigate(e);
});

mmWrap.addEventListener("pointermove", (e) => {
  if (mmDrag) mmNavigate(e);
});

mmWrap.addEventListener("pointerup", () => (mmDrag = false));
mmWrap.addEventListener("pointercancel", () => (mmDrag = false));

document.getElementById("switch").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;

  MODE = b.dataset.mode;
  document.querySelectorAll("#switch button").forEach((x) => x.classList.toggle("on", x === b));

  updateStats();
  draw();
  if (pinned) showInfo(pinned);
});

document.getElementById("viewsw").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;

  viewMode = b.dataset.view;
  document.querySelectorAll("#viewsw button").forEach((x) => x.classList.toggle("on", x === b));

  document.body.classList.remove("listview", "plannerview");

  if (viewMode === "list") document.body.classList.add("listview");

  if (viewMode === "planner") document.body.classList.add("plannerview");

  draw();
});

document.getElementById("kappaBtn").addEventListener("click", () => {
  scopeKappa = !scopeKappa;

  document.getElementById("kappaBtn").classList.toggle("on", scopeKappa);
  draw();
});

// пресет «Дальше»: только доступные сейчас, без сделанных
function syncNextBtn() {
  document.getElementById("nextBtn").classList.toggle("on", F.hidedone && F.onlyavail);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const on = !(F.hidedone && F.onlyavail);

  F.hidedone = on;
  F.onlyavail = on;

  document.getElementById("f-hidedone").classList.toggle("on", on);
  document.getElementById("f-onlyavail").classList.toggle("on", on);
  syncNextBtn();
  draw();

  // при включении пресета граф резко ужимается — сразу показываем его целиком
  if (on && viewMode === "graph") fit();
});

document.getElementById("f-req").addEventListener("change", (e) => {
  F.req = e.target.checked;
  draw();
});

document.getElementById("f-normal").addEventListener("change", (e) => {
  F.normal = e.target.checked;
  draw();
});

document.getElementById("f-event").addEventListener("change", (e) => {
  F.event = e.target.checked;
  draw();
});

document.getElementById("minxp").addEventListener("input", (e) => {
  F.minxp = +e.target.value;
  document.getElementById("minxpv").textContent = F.minxp / 1000 + "k";
  draw();
});

// синхронизация UI фильтров с состоянием (после восстановления/сброса)
function syncFilterUI() {
  document.getElementById("f-req").classList.toggle("on", F.req);
  document.getElementById("f-normal").classList.toggle("on", F.normal);
  document.getElementById("f-event").classList.toggle("on", F.event);
  document.getElementById("f-hidedone").classList.toggle("on", F.hidedone);
  document.getElementById("f-onlyavail").classList.toggle("on", F.onlyavail);
  document.getElementById("links").classList.toggle("on", document.body.classList.contains("links"));
  document.getElementById("kappaBtn").classList.toggle("on", scopeKappa);
  document.getElementById("minxp").value = F.minxp;
  document.getElementById("minxpv").textContent = F.minxp ? F.minxp / 1000 + "k" : "0";
  syncNextBtn();
}

syncFilterUI();

function resetFilters() {
  Object.assign(F, { req: true, normal: true, junk: false, event: false, minxp: 0, hidedone: false, onlyavail: false });
  scopeKappa = false;
  document.body.classList.add("links");

  traders.forEach((tr) => traderOn.add(tr));
  document.querySelectorAll("#legend .legend-item").forEach((el) => (el.style.opacity = 1));

  searchQ = "";
  document.getElementById("search").value = "";

  syncFilterUI();
  draw();
}

// кнопки «Сбросить фильтры» в пустых состояниях рендерятся динамически
document.addEventListener("click", (e) => {
  if (e.target.closest(".reset-filters")) resetFilters();
});

["f-req", "f-normal", "f-event", "links", "f-hidedone", "f-onlyavail"].forEach((id) => {
  const b = document.getElementById(id);

  if (b)
    b.onclick = () => {
      b.classList.toggle("on");

      const st = b.classList.contains("on");

      if (id === "f-req") F.req = st;
      else if (id === "f-normal") F.normal = st;
      else if (id === "f-junk") F.junk = st;
      else if (id === "f-event") F.event = st;
      else if (id === "links") document.body.classList.toggle("links", st);
      else if (id === "f-hidedone") F.hidedone = st;
      else if (id === "f-onlyavail") F.onlyavail = st;

      syncNextBtn();
      draw();
    };
});

// мотиватор: ближайший уровень, открывающий новые квесты
function updateLvlNext() {
  const el = document.getElementById("lvlnext");
  const lv = myLevel || 0;
  const future = DATA.filter((d) => d.minLevel > lv);

  if (!future.length) {
    el.textContent = "";
    return;
  }

  const L = Math.min(...future.map((d) => d.minLevel));
  const N = future.filter((d) => d.minLevel === L).length;

  el.textContent = t("lvl_next").replace("{l}", L).replace("{n}", N);
}

function setLevel(v) {
  myLevel = Math.max(0, Math.min(79, Math.round(+v) || 0));
  const inp = document.getElementById("mylevel");
  if (inp) inp.value = myLevel;
  localStorage.setItem(levelKey(), myLevel);
  updateLvlNext();
  draw();
  persistCloudSoon();
}
document.getElementById("mylevel").value = myLevel;
document.getElementById("lvlminus").onclick = () => setLevel(myLevel - 1);
document.getElementById("lvlplus").onclick = () => setLevel(myLevel + 1);
document.getElementById("mylevel").addEventListener("change", (e) => setLevel(e.target.value));

function switchProfile(p) {
  if (p === activeProfile || !PROFILES.includes(p)) return;

  activeProfile = p;
  localStorage.setItem("eft_kappa_profile", p);

  loadProfileLocal();
  document.getElementById("mylevel").value = myLevel;
  document.querySelectorAll("#profsw button").forEach((b) => b.classList.toggle("on", b.dataset.prof === p));

  updateStats();
  updateLvlNext();
  draw();
  if (pinned) showInfo(pinned);

  if (sessionUser) loadFromCloud();
}

document.getElementById("profsw").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) switchProfile(b.dataset.prof);
});

document.querySelectorAll("#profsw button").forEach((b) => b.classList.toggle("on", b.dataset.prof === activeProfile));

function applyTheme(th) {
  if (th) document.documentElement.setAttribute("data-theme", th);
  else document.documentElement.removeAttribute("data-theme");
  document
    .querySelectorAll("#themeSw .theme-dot")
    .forEach((b) => b.classList.toggle("on", (b.dataset.theme || "") === (th || "")));
  localStorage.setItem("eft_kappa_theme", th || "");
  drawMinimap(); // цвета мини-карты берутся из темы
}
document.querySelectorAll("#themeSw .theme-dot").forEach((b) => (b.onclick = () => applyTheme(b.dataset.theme)));
applyTheme(localStorage.getItem("eft_kappa_theme") || "");

const seasonBtn = document.getElementById("seasonBtn");
seasonBtn.classList.toggle("on", seasonal);
seasonBtn.onclick = () => {
  seasonal = !seasonal;
  localStorage.setItem("eft_kappa_seasonal", seasonal ? "1" : "0");
  seasonBtn.classList.toggle("on", seasonal);
  updateStats();
  draw();
  if (pinned) showInfo(pinned);
};

document.getElementById("f-hidedone").addEventListener("change", (e) => {
  F.hidedone = e.target.checked;
  draw();
});

document.getElementById("f-onlyavail").addEventListener("change", (e) => {
  F.onlyavail = e.target.checked;
  draw();
});

document.getElementById("fit").onclick = fit;

document.getElementById("zfit").onclick = fit;

document.getElementById("zin").onclick = () => {
  k = clampK(k * 1.3);
  userAdjustedView = true;
  apply();
};

document.getElementById("zout").onclick = () => {
  k = clampK(k / 1.3);
  userAdjustedView = true;
  apply();
};

document.getElementById("toastUndo").onclick = () => {
  if (!undoSnap) return;

  done = new Set(undoSnap);
  undoSnap = null;
  clearTimeout(undoTimer);
  document.getElementById("toast").style.display = "none";

  persist();
  updateStats();
  draw();
  if (pinned) showInfo(pinned);
};

document.getElementById("togglePanel").onclick = () => document.body.classList.add("panel-open");

document.getElementById("panelClose").onclick = () => document.body.classList.remove("panel-open");

// ---- мобильная раскладка ----
// Шапка на телефоне — всегда одна компактная строка; всё остальное
// физически переезжает в полноэкранное меню (#panel) и обратно на десктопе.

const mobileMoves = [
  { el: document.querySelector(".ctrl"), to: "ps-search" },
  { el: document.getElementById("switch"), to: "ps-mode" },
  { el: document.getElementById("profsw"), to: "ps-mode" },
  { el: document.getElementById("kappaBtn"), to: "ps-mode" },
  { el: document.querySelector(".hdr-tools"), to: "ps-tools" },
  { el: document.getElementById("langsw"), to: "ps-misc" },
  { el: document.getElementById("auth-ui"), to: "ps-misc" },
].map((m) => {
  // маркер запоминает исходное место в шапке для точного возврата
  m.marker = document.createComment("home");
  m.el.parentNode.insertBefore(m.marker, m.el);
  return m;
});

function relocateControls(mobile) {
  mobileMoves.forEach((m) => {
    if (mobile) document.getElementById(m.to).appendChild(m.el);
    else m.marker.parentNode.insertBefore(m.el, m.marker.nextSibling);
  });
}

const mobileMQ = matchMedia("(max-width: 820px)");

relocateControls(mobileMQ.matches);
mobileMQ.addEventListener("change", (e) => relocateControls(e.matches));

const matchName = (d, q) => d.name.toLowerCase().includes(q) || (d.nameRu || "").toLowerCase().includes(q);

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();

  searchQ = q;

  if (viewMode !== "graph") {
    draw();
    return;
  }

  nodeEls.forEach((g, id) => g.classList.toggle("dim", q && !matchName(byId.get(id), q)));
  edgeEls.forEach((p) => p.classList.remove("hl"));
});

search.addEventListener("input", () => renderSug(search.value.trim().toLowerCase()));

function jumpToQuest(hit) {
  if (!hit) return;

  // на мобиле поиск живёт в меню — при переходе к квесту закрываем его
  document.body.classList.remove("panel-open");
  hideSug();

  if (!nodeEls.has(hit.id)) {
    // узел скрыт фильтрами — хотя бы показываем карточку
    pinned = hit.id;
    showInfo(hit.id);
    return;
  }

  if (viewMode !== "graph") {
    document.querySelector('#viewsw button[data-view="graph"]').click();
  }

  nodeEls.get(hit.id).dispatchEvent(new MouseEvent("click", { bubbles: true }));

  const coordG = nodeEls
    .get(hit.id)
    .getAttribute("transform")
    .match(/translate\(([-\d.]+),([-\d.]+)\)/);

  const nx = +coordG[1],
    ny = +coordG[2];
  const r = stage.getBoundingClientRect();
  tx = r.width / 2 - (nx + NODE_W / 2) * k;
  ty = r.height / 2 - (ny + NODE_H / 2) * k;
  apply();
}

search.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const q = search.value.trim().toLowerCase();
  jumpToQuest(DATA.find((d) => matchName(d, q) && nodeEls.has(d.id)) || DATA.find((d) => matchName(d, q)));
});

// живые подсказки под полем поиска
const sugEl = document.createElement("div");
sugEl.id = "searchSug";
search.parentElement.appendChild(sugEl);

function hideSug() {
  sugEl.style.display = "none";
  sugEl.innerHTML = "";
}

function renderSug(q) {
  if (!q) {
    hideSug();
    return;
  }

  const hits = DATA.filter((d) => matchName(d, q)).slice(0, 6);

  if (!hits.length) {
    hideSug();
    return;
  }

  sugEl.innerHTML = hits
    .map(
      (d) =>
        `<div class="sug" data-id="${d.id}"><span class="sug-dot" style="background:${TC[d.trader] || "#888"}"></span>` +
        `<span class="sug-nm">${dn(d)}</span><span class="sug-meta">${t(d.trader)}${d.minLevel ? " · " + t("c_lvl") + " " + d.minLevel : ""}</span></div>`,
    )
    .join("");
  sugEl.style.display = "block";
}

sugEl.addEventListener("pointerdown", (e) => {
  const row = e.target.closest(".sug");
  if (!row) return;
  e.preventDefault();
  search.value = "";
  searchQ = "";
  nodeEls.forEach((g) => g.classList.remove("dim"));
  jumpToQuest(byId.get(row.dataset.id));
});

search.addEventListener("blur", () => setTimeout(hideSug, 150));

// ---- SUPABASE CLOUD SYNC ----

const SUPABASE_URL = "https://hzphxpcmppummlxuqqyp.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGh4cGNtcHB1bW1seHVxcXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMjY0NjcsImV4cCI6MjA5OTgwMjQ2N30.Vn8LlI3zQxbVTvKFioGq8CsG94kShIRx7Y20bzpXiHE";

let sbClient = null;

let sessionUser = null;

let cloudLoaded = false;

if (SUPABASE_URL && SUPABASE_KEY && window.supabase) {
  sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // INITIAL_SESSION приходит и с session=null для анонима — локальный
  // прогресс при этом трогать нельзя. Чистим только флаг загрузки
  // облака на явном SIGNED_OUT; localStorage остаётся как есть.
  sbClient.auth.onAuthStateChange((event, session) => {
    sessionUser = session?.user || null;

    applyAuthUI();

    if (sessionUser && !cloudLoaded) {
      cloudLoaded = true;
      loadFromCloud();
      subscribeRealtime();
    } else if (event === "SIGNED_OUT") {
      cloudLoaded = false;
      unsubscribeRealtime();
    }
  });
}

// ---- realtime: живые обновления с других устройств ----
// Требует включённого Realtime для таблицы profiles
// (см. supabase/profiles-migration.sql); без него просто молчит.

let rtChannel = null;

function applyCloudRow(row) {
  const full = row.profiles && typeof row.profiles === "object";

  // неактивные слоты обновляем тихо
  if (full) {
    PROFILES.forEach((p) => {
      if (p !== activeProfile && row.profiles[p]) writeSlot(p, row.profiles[p]);
    });
  }

  const slot = full ? row.profiles[activeProfile] || {} : activeProfile === "pvp" ? row : null;
  if (!slot) return;

  const nd = slot.done || [];
  const nl = slot.mylevel ?? 0;
  const same = nd.length === done.size && nl === myLevel && nd.every((id) => done.has(id));

  if (same) return; // эхо собственной записи

  done = new Set(nd);
  myLevel = nl;

  document.getElementById("mylevel").value = myLevel;
  saveLocal();
  localStorage.setItem(levelKey(), myLevel);

  updateStats();
  updateLvlNext();
  draw();
  if (pinned) showInfo(pinned);

  setSyncState("ok");
  showToast(t("rt_updated"), false);
}

function subscribeRealtime() {
  if (!sbClient || !sessionUser || rtChannel) return;

  rtChannel = sbClient
    .channel("profile-rt")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "profiles", filter: "id=eq." + sessionUser.id },
      (payload) => {
        if (payload.new && !syncBusy) applyCloudRow(payload.new);
      },
    )
    .subscribe();
}

function unsubscribeRealtime() {
  if (rtChannel && sbClient) {
    sbClient.removeChannel(rtChannel);
    rtChannel = null;
  }
}

function applyAuthUI() {
  const login = document.getElementById("btnLogin");

  const prof = document.getElementById("userProfile");

  if (sessionUser) {
    login.style.display = "none";

    prof.style.display = "flex";

    document.getElementById("userName").textContent = sessionUser.email.split("@")[0];
  } else {
    login.style.display = "block";

    prof.style.display = "none";
  }
}

const loginModal = document.getElementById("loginModal");

const lgErr = document.getElementById("lgErr");

function openLogin() {
  lgErr.textContent = "";
  lgErr.style.color = "var(--bad)";
  loginModal.style.display = "flex";
  document.getElementById("lgEmail").focus();
}

function closeLogin() {
  loginModal.style.display = "none";
}

document.getElementById("btnLogin").onclick = () => {
  if (!sbClient) {
    alert("Supabase не сконфигурирован.");
    return;
  }
  openLogin();
};

document.getElementById("loginClose").onclick = closeLogin;

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) closeLogin();
});

async function doPassword(mode) {
  const email = document.getElementById("lgEmail").value.trim();

  const pass = document.getElementById("lgPass").value;

  lgErr.style.color = "var(--bad)";
  lgErr.textContent = "";

  if (!email || !pass) {
    lgErr.textContent = t("lg_need");
    return;
  }

  const res =
    mode === "up"
      ? await sbClient.auth.signUp({ email, password: pass })
      : await sbClient.auth.signInWithPassword({ email, password: pass });

  if (res.error) {
    lgErr.textContent = res.error.message;
    return;
  }

  if (mode === "up" && !res.data.session) {
    lgErr.style.color = "var(--good)";
    lgErr.textContent = t("lg_confirm");
    return;
  }

  closeLogin();
}

document.getElementById("lgSignin").onclick = () => doPassword("in");

document.getElementById("lgSignup").onclick = () => doPassword("up");

document.getElementById("lgGoogle").onclick = async () => {
  const { error } = await sbClient.auth.signInWithOAuth({
    provider: "google",

    options: { redirectTo: window.location.origin + window.location.pathname },
  });

  if (error) lgErr.textContent = error.message;
};

document.getElementById("btnLogout").onclick = () => {
  if (sbClient) sbClient.auth.signOut();
};

// null — схема облака ещё неизвестна; true — есть jsonb-колонка profiles
// (все 3 слота синхронизируются); false — легаси-схема (только PVP).
let cloudHasProfilesCol = null;

function migrationHint() {
  setSyncState("err");
  const el = document.getElementById("syncState");
  if (el)
    el.title =
      "Слот " + activeProfile.toUpperCase() + " не синхронизируется: выполните supabase/profiles-migration.sql";
}

async function loadFromCloud() {
  if (!sbClient || !sessionUser) return;

  setSyncState("busy");

  const { data, error } = await sbClient.from("profiles").select("*").eq("id", sessionUser.id).maybeSingle();

  if (error) {
    setSyncState("err");
    return;
  }

  if (data) cloudHasProfilesCol = "profiles" in data;

  const full = data ? "profiles" in data : cloudHasProfilesCol === true;

  let slot;
  if (full) slot = (data?.profiles || {})[activeProfile] || {};
  else if (activeProfile === "pvp") slot = { done: data?.done, mylevel: data?.mylevel };
  else {
    // легаси-схема хранит только PVP — этот слот живёт локально
    migrationHint();
    return;
  }

  const cloudDone = new Set(slot?.done || []);
  const cloudLevel = slot?.mylevel ?? 0;

  const cloudEmpty = cloudDone.size === 0 && cloudLevel === 0;
  const localEmpty = done.size === 0 && myLevel === 0;
  const same = done.size === cloudDone.size && myLevel === cloudLevel && [...done].every((id) => cloudDone.has(id));

  const cloudProfiles = full ? data?.profiles || {} : null;

  // Однозначные случаи решаем молча; спрашиваем пользователя только
  // когда локальный и облачный прогресс реально расходятся.
  if (same) setSyncState("ok");
  else if (cloudEmpty) applySyncChoice("local", cloudDone, cloudLevel, cloudProfiles);
  else if (localEmpty) applySyncChoice("cloud", cloudDone, cloudLevel, cloudProfiles);
  else openSyncModal(cloudDone, cloudLevel, cloudProfiles);
}

// ---- конфликт прогресса: выбор пользователя ----

function progressMeta(doneSet, lvl) {
  const req = DATA.filter(isReq);
  const doneReq = req.reduce((n, d) => n + (doneSet.has(d.id) ? 1 : 0), 0);
  const pct = req.length ? Math.round((doneReq / req.length) * 100) : 0;

  return `${doneSet.size} ${t("q")} · ${pct}% ${t("sync_kappa")} · ${t("mylevel_short")} ${lvl}`;
}

function openSyncModal(cloudDone, cloudLevel, cloudProfiles) {
  document.getElementById("syncLocalMeta").textContent = progressMeta(done, myLevel);
  document.getElementById("syncCloudMeta").textContent = progressMeta(cloudDone, cloudLevel);

  const modal = document.getElementById("syncModal");
  modal.style.display = "flex";

  document.getElementById("syncKeepLocal").onclick = () => applySyncChoice("local", cloudDone, cloudLevel, cloudProfiles);
  document.getElementById("syncKeepCloud").onclick = () => applySyncChoice("cloud", cloudDone, cloudLevel, cloudProfiles);
  document.getElementById("syncMerge").onclick = () => applySyncChoice("merge", cloudDone, cloudLevel, cloudProfiles);
}

function applySyncChoice(choice, cloudDone, cloudLevel, cloudProfiles) {
  document.getElementById("syncModal").style.display = "none";

  if (choice === "cloud") {
    done = new Set(cloudDone);
    myLevel = cloudLevel;
  } else if (choice === "merge") {
    cloudDone.forEach((id) => done.add(id));
    myLevel = Math.max(myLevel, cloudLevel);
  }
  // choice === "local": локальные данные остаются как есть

  // выбор применяется и к неактивным слотам (при полной облачной схеме)
  if (cloudProfiles) {
    PROFILES.forEach((p) => {
      if (p === activeProfile) return;

      const local = readSlot(p);
      const cloud = cloudProfiles[p] || { done: [], mylevel: 0 };

      let out;
      if (choice === "cloud") out = { done: cloud.done || [], mylevel: cloud.mylevel || 0 };
      else if (choice === "local") out = local;
      else
        out = {
          done: [...new Set([...(local.done || []), ...(cloud.done || [])])],
          mylevel: Math.max(local.mylevel || 0, cloud.mylevel || 0),
        };

      writeSlot(p, out);
    });
  }

  document.getElementById("mylevel").value = myLevel;
  localStorage.setItem(levelKey(), myLevel);
  saveLocal();

  if (choice === "cloud") setSyncState("ok");
  else persistCloudSoon();

  updateStats();
  updateLvlNext();
  draw();
  if (pinned) showInfo(pinned);
}

let syncTimer = null,
  syncBusy = false,
  syncDirty = false;

function setSyncState(st) {
  const el = document.getElementById("syncState");
  if (!el) return;
  el.className = "sync-" + st;
  el.textContent = st === "err" ? "⚠" : st === "busy" ? "⟳" : "✓";
  el.title =
    st === "err"
      ? "Ошибка синхронизации — прогресс сохранён только локально"
      : st === "busy"
        ? "Сохранение…"
        : "Синхронизировано";
}

function persistCloudSoon() {
  if (!sbClient || !sessionUser) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(persistCloudNow, 1200);
}

async function persistCloudNow() {
  if (!sbClient || !sessionUser) return;

  clearTimeout(syncTimer);
  syncTimer = null;

  if (syncBusy) {
    // запрос уже в полёте: не даём ответам обгонять друг друга,
    // просто помечаем, что после него нужен ещё один
    syncDirty = true;
    return;
  }

  if (cloudHasProfilesCol === false && activeProfile !== "pvp") {
    // легаси-схема умеет хранить только PVP
    migrationHint();
    return;
  }

  syncBusy = true;
  setSyncState("busy");

  // легаси-поля done/mylevel всегда несут PVP-слот (обратная совместимость)
  const pvp = activeProfile === "pvp" ? { done: [...done], mylevel: myLevel } : readSlot("pvp");
  const payload = { id: sessionUser.id, done: pvp.done, mylevel: pvp.mylevel };

  const withProfiles = cloudHasProfilesCol !== false;

  if (withProfiles) {
    payload.profiles = {};
    PROFILES.forEach((p) => {
      payload.profiles[p] = p === activeProfile ? { done: [...done], mylevel: myLevel } : readSlot(p);
    });
  }

  let error = null;

  try {
    ({ error } = await sbClient.from("profiles").upsert(payload));
  } catch (e) {
    error = e;
  }

  syncBusy = false;

  // колонки profiles нет — запоминаем и повторяем в легаси-формате
  if (error && withProfiles && cloudHasProfilesCol === null && /profiles/i.test(error.message || "")) {
    cloudHasProfilesCol = false;
    persistCloudNow();
    return;
  }

  if (!error && withProfiles) cloudHasProfilesCol = true;

  if (syncDirty) {
    syncDirty = false;
    persistCloudNow();
    return;
  }

  setSyncState(error ? "err" : "ok");
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && syncTimer) persistCloudNow();
});

const _originalPersist = persist;

persist = function () {
  _originalPersist();

  if (sessionUser) persistCloudSoon();
};

function applyLang() {
  document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = t(el.dataset.t)));

  document.querySelectorAll("[data-tph]").forEach((el) => (el.placeholder = t(el.dataset.tph)));

  document.querySelectorAll("[data-tt]").forEach((el) => (el.title = t(el.dataset.tt)));

  document.documentElement.lang = LANG;

  bLabel.req = LANG === "ru" ? "КАППА" : "KAPPA";

  bLabel.seed = LANG === "ru" ? "КЛЮЧЕВОЙ" : "SEED";

  bLabel.junk = LANG === "ru" ? "МУСОР" : "JUNK";

  bLabel.normal = LANG === "ru" ? "ОБЫЧНЫЙ" : "NORMAL";

  bLabel.event = LANG === "ru" ? "ИВЕНТ" : "EVENT";

  updateStats();
  updateLvlNext();
  draw();
}

document.getElementById("langsw").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;

  LANG = b.dataset.lang;
  document.querySelectorAll("#langsw button").forEach((x) => x.classList.toggle("on", x === b));

  if (pinned) showInfo(pinned);
  applyLang();
});

applyLang();
