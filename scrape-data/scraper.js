const scrapeCategory = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();
      console.log(">> Open new tab...");
      await page.goto(url);
      console.log(">>> Connection ", url);
      await page.waitForSelector("#webpage"); // parameter is id instance of website
      console.log(">>> Website loading finished ...");

      let dataCategory = await page.$$eval("#navbar-menu > ul > li", (els) => {
        dataCategory = els.map((el) => {
          return {
            category: el.querySelector("a").innerText,
            link: el.querySelector("a").href,
          };
        });
        return dataCategory;
      });
      console.log(">>>", dataCategory);
      await page.close();
      console.log("tab closed");
      resolve(page);
    } catch (error) {
      console.log("error in scrape category: " + error);

      reject(error);
    }
  });

module.exports = { scrapeCategory };
// const scrapeCategory = async (browser, url) => {
//   try {
//     let page = await browser.newPage();
//     console.log(">> Open new tab...");
//     await page.goto(url);
//     console.log(">>> Connection ", url);
//     await page.waitForSelector("#webpage"); // parameter is id instance of website
//     console.log(">>> Website finished loading...");
//   } catch (error) {
//     console.log("error in scrape category: " + error);
//   }
// };
