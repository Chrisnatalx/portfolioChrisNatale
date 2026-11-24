// Renderiza og/og.html a assets/og.png (ES) y assets/og-en.png (EN), 1200×630.
// Uso: NODE_PATH=<carpeta con playwright-core> node og/render.cjs
const path = require('path');
const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  const url = 'file://' + path.join(__dirname, 'og.html');
  for (const [hash, out] of [['', 'og.png'], ['#en', 'og-en.png']]) {
    await page.goto(url + hash);
    await page.reload(); // el hash solo se aplica al cargar
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(__dirname, '..', 'assets', out) });
    console.log('assets/' + out);
  }
  await browser.close();
})();
