const puppeteer = require('puppeteer');
const fs = require('fs').promises; // Thêm module này để thao tác với file system

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const host = "https://muaban.net/";
  const routes = ["bat-dong-san/cho-thue-nha-dat-ho-chi-minh"];
  const results = {};

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1024 });
      const url = host + route;
      await page.goto(url);

      results[route] = [];

      let loadMoreSuccess = true;

      setInterval(async () => {
        await saveResults(results);
      }, 3000)

      while (loadMoreSuccess) {
        loadMoreSuccess = await loadMore(page, results, route);
      }

      await page.close();
    } catch (error) {
      console.error(`Error processing ${route}: ${error}`);
    }
  }

  await browser.close();

  await saveResults(results);

  function getFullUrls(hrefs) {
    return hrefs.map(href => href.startsWith(host) ? href : host + href);
  }

  async function loadMore(page, results, route) {
    try {
      await page.waitForSelector('.button-more, .button-down', { timeout: 3000 });
      await page.click('.button-more, .button-down');

      const hrefs = await page.$$eval('a.title', (anchors) => anchors.map(a => a.href));
      const fullUrls = getFullUrls(hrefs);

      if (fullUrls.length === 0) {
        return false; // No more links found
      }

      results[route] = results[route].concat(fullUrls);
      return true;

    } catch (error) {
      console.error('Error loading more results:', error);
      return false; // Assume no more buttons if an error occurs
    }
  }

  async function saveResults(results) {
    try {
      await fs.writeFile(`results.json`, JSON.stringify(results, null, 2));
      console.log('Results saved to results.json');
    } catch (error) {
      console.error('Error saving results:', error);
    }
  }

})();
