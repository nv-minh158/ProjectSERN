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
        await page.close();
        console.log("tab closed");
        resolve(dataCategory);
      } catch (error) {
        console.log("error in scrape category: " + error);

        reject(error);
      }
    });

const scraper = async (browser, url) =>
    new Promise(async (resolve, reject) => {
      try {
        let newPage = await browser.newPage();
        console.log(">>> Open new tab...");
        await newPage.goto(url);
        console.log(">>> Connected to new tab...", url);
        await newPage.waitForSelector("#main");
        console.log(">>> finished loading tag main");

        const scrapeData = {};

        // crawl header information
        const headerData = await newPage.$eval("header", (el) => {
          return {
            title: el.querySelector("h1").innerText,
            description: el.querySelector("p").innerText,
          };
        });
        scrapeData.header = headerData;

        // crawl links detail item
        let detailLinks = await newPage.$$eval(
            "#left-col > section.section-post-listing > ul > li",
            (els) => {
              detailLinks = els.map(
                  (el) => el.querySelector(".post-meta > h3 > a").href
              );
              return detailLinks;
            }
        );

        const scraperDetail = async (link) => {
          try {
            let pageDetail = await browser.newPage();
            await pageDetail.goto(link);
            await pageDetail.waitForSelector("#main");
            const detailData = {};
            // start crawls
            // crawls images
            const images = await pageDetail.$$eval("")

          } catch (error) {
            console.log("crawl data detail error: " + error);
          }
        };

        for (let link of detailLinks) {
          await scraperDetail(link);
        }

        await browser.close();
        resolve(scrapeData);
      } catch (error) {
        reject(error);
      }
    });

module.exports = {scrapeCategory, scraper};

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
