const scrapers = require("./scraper");

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  try {
    let browser = await browserInstance; // call function crawl in file scraper
    let categories = scrapers.scrapeCategory(browser, url);
  } catch (error) {
    console.log("error in scrape controller:", error);
  }
};

module.exports = scrapeController;
