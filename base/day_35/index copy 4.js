const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const host = "https://muaban.net/";
  const routes = [
    "bat-dong-san/cho-thue-nha-dat-ho-chi-minh",
    "bat-dong-san/cho-thue-nha-dat-ha-noi"];
  const results = {};
  const routeInfo = {}; // Tạo một hashmap để lưu pageCount và currentPageUrl của từng route

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1024 });
      const url = host + route;
      await page.goto(url);

      results[route] = [];
      routeInfo[route] = {
        pageCount: 1, // Bắt đầu với pageCount = 1
        currentPageUrl: url,
      };

      let loadMoreSuccess = true;
      let retryCount = 0;

      setInterval(async () => {
        await saveResults(results);
      }, 3000);

      while (loadMoreSuccess) {
        loadMoreSuccess = await loadMore(page, results, route, routeInfo); // Truyền routeInfo
        if (!loadMoreSuccess && retryCount < 5) {
          console.log(`Retrying loading more results (${retryCount + 1}/5)`);
          await page.close();
          const newPage = await browser.newPage();
          await newPage.setViewport({ width: 1080, height: 1024 });
          await newPage.goto(routeInfo[route].currentPageUrl); // Sử dụng currentPageUrl từ routeInfo
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

  async function loadMore(page, results, route, routeInfo) { // Thêm routeInfo
    try {
      await page.waitForSelector('.button-more, .button-down', { timeout: 15000 });
      await page.click('.button-more, .button-down');

      // Lấy pageCount từ routeInfo và tăng nó lên sau khi click thành công
      routeInfo[route].pageCount++;
      // Cập nhật currentPageUrl dựa trên pageCount
      routeInfo[route].currentPageUrl = `${host}${route}#page=${routeInfo[route].pageCount}`;

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
