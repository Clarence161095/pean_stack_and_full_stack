const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const host = "https://muaban.net/";
  const routes = [
    "bat-dong-san/cho-thue-nha-dat-ho-chi-minh",
    "bat-dong-san/cho-thue-nha-dat-ha-noi"];
  const results = {};
  const routeInfo = {};

  // Đọc dữ liệu từ tệp results.json nếu có
  try {
    const existingResults = await fs.readFile('results.json', 'utf8');
    Object.assign(results, JSON.parse(existingResults));
  } catch (error) {
    console.error('Error reading existing results:', error);
  }

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1024 });
      const url = host + route;
      await page.goto(url);

      // Kiểm tra xem route đã tồn tại trong kết quả hay chưa
      if (!results[route]) {
        results[route] = [];
      }

      if (!routeInfo[route]) {
        routeInfo[route] = {
          pageCount: 1,
          currentPageUrl: url,
        };
      }

      let loadMoreSuccess = true;
      let retryCount = 0;

      setInterval(async () => {
        await saveResults(results);
      }, 3000);

      while (loadMoreSuccess) {
        loadMoreSuccess = await loadMore(page, results, route, routeInfo);
        if (!loadMoreSuccess && retryCount < 5) {
          console.log(`Retrying loading more results (${retryCount + 1}/5)`);
          await page.close();
          const newPage = await browser.newPage();
          await newPage.setViewport({ width: 1080, height: 1024 });
          await newPage.goto(routeInfo[route].currentPageUrl);
          retryCount++;
          loadMoreSuccess = true;
        }
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

  async function loadMore(page, results, route, routeInfo) {
    try {
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });

      await page.waitForSelector('.button-more, .button-down', { timeout: 15000 });
      await page.click('.button-more, .button-down');

      routeInfo[route].pageCount++;
      routeInfo[route].currentPageUrl = `${host}${route}#page=${routeInfo[route].pageCount}`;

      const hrefs = await page.$$eval('a.title', (anchors) => anchors.map(a => a.href));
      const fullUrls = getFullUrls(hrefs);

      // Loại bỏ các URL trùng lặp
      const uniqueFullUrls = Array.from(new Set(fullUrls));

      if (uniqueFullUrls.length === 0) {
        return false;
      }

      results[route] = results[route].concat(uniqueFullUrls);

      return true;
    } catch (error) {
      console.error('Error loading more results:', error);
      return false;
    }
  }

  async function saveResults(results) {
    try {
      // Loại bỏ các URL trùng lặp trước khi lưu kết quả
      for (const route in results) {
        results[route] = Array.from(new Set(results[route]));
      }
      await fs.writeFile(`results.json`, JSON.stringify(results, null, 2));
      console.log('Results saved to results.json');
    } catch (error) {
      console.error('Error saving results:', error);
    }
  }
})();
