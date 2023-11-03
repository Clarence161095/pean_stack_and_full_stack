const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const host = "https://muaban.net/";
  // Thực hiện cho toàn bộ route, nếu như trường hợp route hiện tại gặp bất kỳ lỗi nào thì hãy thực next route tiếp theo. Hoặc sau nhiều lần loadMore không thành công hoặc ko tìm thêm được link nào thì hãy thực hiện next route.
  const routes = ["bat-dong-san/cho-thue-nha-dat-ho-chi-minh"]
  const url = host + routes[0];
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1024 });
  await page.goto(url);

  async function loadMore() {
    try {
      await page.waitForSelector('.button-more, .button-down', { timeout: 3000 });
      await page.click('.button-more, .button-down');
      // TODO: Tôi muốn chờ cho tới khi trang load xong thay vì 2s
      await page.waitForTimeout(2000); // Chờ 2 giây sau khi nhấn nút để trang mới load
      return true;
    } catch (error) {
      return false; // Hết nút để nhấn
    }
  }

  // TODO: Mỗi lần loadMore() như vậy hãy thực hiện lưu kết quả vào 1 file json có cấu trúc như sau để tránh mấu dữ liêu:
  {
    routes[0]: [list...]
    ...
    routes[n]: [list...]
  }
  let links = [];

  while (await loadMore()) {
    const hrefs = await page.$$eval('a.title', (links) => {
      return links.map(link => link.href);
    });

    links = links.concat(hrefs.map(href => host + href));
  }

  await browser.close();

  // In ra màn hình
  links.forEach(link => console.log(link));
})();
