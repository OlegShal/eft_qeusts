// Смоук-тест: поднимает статический сервер, открывает приложение в Chromium
// (десктоп + мобильный вьюпорт) и проверяет ключевые сценарии.
// Запуск: npm install && npx playwright install chromium && npm test

const { createServer } = require("http");
const { readFile } = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const PORT = 8123;
const URL = `http://127.0.0.1:${PORT}/index.html`;

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json" };

let fails = 0;
const check = (name, ok, extra = "") => {
  console.log((ok ? "PASS" : "FAIL") + "  " + name + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails++;
};

const serve = () =>
  new Promise((resolve) => {
    const srv = createServer(async (req, res) => {
      const file = path.join(ROOT, req.url === "/" ? "index.html" : req.url.split("?")[0]);
      try {
        const body = await readFile(file);
        res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end();
      }
    });
    srv.listen(PORT, () => resolve(srv));
  });

(async () => {
  const srv = await serve();

  const launchOpts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
  const browser = await chromium.launch(launchOpts);

  // ---------- DESKTOP ----------
  const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  d.on("pageerror", (e) => errs.push(e.message));
  await d.goto(URL, { waitUntil: "load" });
  await d.waitForTimeout(1500);

  const nodeCount = await d.evaluate(() => document.querySelectorAll("#nodes .node").length);
  check("desktop: graph rendered", nodeCount > 200, nodeCount + " nodes");
  check("desktop: no JS exceptions", errs.length === 0, errs.join("; ").slice(0, 200));

  // клик по узлу открывает инфо-панель; отметка «сделано» не сбрасывает зум и не пересоздаёт DOM
  const tBefore = await d.evaluate(() => document.getElementById("view").getAttribute("transform"));
  const target = await d.evaluate(() => {
    const vw = document.documentElement.clientWidth,
      vh = document.documentElement.clientHeight;
    for (const g of document.querySelectorAll("#nodes .node")) {
      const r = g.getBoundingClientRect();
      if (r.left > 50 && r.top > 150 && r.right < vw - 420 && r.bottom < vh - 80) {
        g.dataset.marker = "alive";
        return { id: g.dataset.id, x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }
    }
    return null;
  });
  check("visible node found", !!target);

  if (target) {
    await d.mouse.click(target.x, target.y);
    await d.waitForTimeout(300);
    check("node click opens info panel", await d.evaluate(() => document.getElementById("info").style.display === "block"));

    await d.click('#infoBody [data-act="done"]');
    await d.waitForTimeout(200);
    const after = await d.evaluate((id) => {
      const g = document.querySelector(`#nodes .node[data-id="${id}"]`);
      return {
        transform: document.getElementById("view").getAttribute("transform"),
        isDone: g.classList.contains("ndone"),
        sameDom: g.dataset.marker === "alive",
        lsDone: JSON.parse(localStorage.getItem("eft_kappa_done") || "[]").includes(id),
      };
    }, target.id);
    check("done-toggle: zoom preserved", after.transform === tBefore);
    check("done-toggle: node marked ndone", after.isDone);
    check("done-toggle: DOM not rebuilt (incremental)", after.sameDom);
    check("done-toggle: saved to localStorage", after.lsDone);

    await d.reload({ waitUntil: "load" });
    await d.waitForTimeout(1200);
    check(
      "progress survives reload",
      await d.evaluate((id) => JSON.parse(localStorage.getItem("eft_kappa_done") || "[]").includes(id), target.id),
    );
  }

  // фильтры переживают перезагрузку
  await d.click("#f-hidedone");
  await d.click("#kappaBtn");
  await d.waitForTimeout(300);
  await d.reload({ waitUntil: "load" });
  await d.waitForTimeout(1200);
  const f = await d.evaluate(() => ({
    hidedone: document.getElementById("f-hidedone").classList.contains("on"),
    kappa: document.getElementById("kappaBtn").classList.contains("on"),
  }));
  check("filters persist after reload", f.hidedone && f.kappa, JSON.stringify(f));
  await d.click("#f-hidedone");
  await d.click("#kappaBtn");

  // список и планировщик рендерятся
  await d.click('#viewsw button[data-view="list"]');
  await d.waitForTimeout(300);
  const rows = await d.evaluate(() => document.querySelectorAll("#list tr").length);
  check("list view renders", rows > 100, rows + " rows");
  await d.click('#viewsw button[data-view="planner"]');
  await d.waitForTimeout(300);
  check("planner view renders", await d.evaluate(() => document.getElementById("planner").innerHTML.length > 500));

  // переключение языка
  await d.click('#langsw button[data-lang="en"]');
  await d.waitForTimeout(200);
  check("EN i18n works", (await d.evaluate(() => document.querySelector('#viewsw button[data-view="graph"]').textContent)) === "Graph");
  await d.close();

  // ---------- MOBILE ----------
  const m = await browser.newPage({ viewport: { width: 375, height: 667 }, hasTouch: true, isMobile: true });
  await m.goto(URL, { waitUntil: "load" });
  await m.waitForTimeout(1500);
  const mm = await m.evaluate(() => {
    const doc = document.documentElement;
    return {
      overflow: doc.scrollWidth - doc.clientWidth,
      hdrH: Math.round(document.querySelector("header").getBoundingClientRect().height),
    };
  });
  check("mobile: no horizontal overflow", mm.overflow === 0, JSON.stringify(mm));
  check("mobile: header is one compact row", mm.hdrH < 100, mm.hdrH + "px");

  // всё второстепенное переехало в меню
  await m.click("#togglePanel");
  await m.waitForTimeout(200);
  const menu = await m.evaluate(() => ({
    open: document.body.classList.contains("panel-open"),
    search: !!document.querySelector("#ps-search #search"),
    mode: !!document.querySelector("#ps-mode #switch"),
    level: !!document.querySelector("#ps-tools #mylevel"),
    auth: !!document.querySelector("#ps-misc #auth-ui"),
  }));
  check("mobile: menu opens with relocated controls", Object.values(menu).every(Boolean), JSON.stringify(menu));
  await m.click("#panelClose");
  check("mobile: menu closes", await m.evaluate(() => !document.body.classList.contains("panel-open")));
  await m.close();

  await browser.close();
  srv.close();

  console.log(fails === 0 ? "\nALL CHECKS PASSED" : "\n" + fails + " CHECK(S) FAILED");
  process.exit(fails === 0 ? 0 : 1);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
