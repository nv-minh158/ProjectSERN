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
            (el) => el.querySelector("div.post-meta > h3 > a").href
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
          let images = await pageDetail.$$eval(
            "#left-col > article > div.post-images > div > div.swiper-wrapper > div.swiper-slide",
            (els) => {
              images = els.map(
                (el) => el.querySelector("img,iframe,video").src
              );
              return images;
            }
          );
          detailData.images = images;
          //
          //     // crawls header detail
          const header = await pageDetail.$eval(
            "#left-col > article > header",
            (el) => {
              return {
                title: el.querySelector("h1 > a").innerText,
                star: el
                  .querySelector("h1 > span")
                  .className.replace(/^\D+/g, ""),
                class: {
                  content: el.querySelector("p").innerText,
                  classType: el.querySelector("p > a > strong").innerText,
                },
                address: el.querySelector("address").innerText,
                attribute: {
                  price: el.querySelector("div.post-attributes > .price > span")
                    .innerText,
                  acreage: el.querySelector(
                    "div.post-attributes > .acreage > span"
                  ).innerText,
                  published: el.querySelector(
                    "div.post-attributes > .published > span"
                  ).innerText,
                  hashtag: el.querySelector(
                    "div.post-attributes > .hashtag > span"
                  ).innerText,
                },
              };
            }
          );
          detailData.header = header;
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

module.exports = { scrapeCategory, scraper };

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
