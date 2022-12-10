const scrapers = require("./scraper");
const fs = require("fs");
const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  const indexs = [1, 2, 3, 4];
  try {
    let browser = await browserInstance; // call function crawl in file scraper
    const categories = await scrapers.scrapeCategory(browser, url);
    const selectedCategories = categories.filter((category, index) =>
      indexs.some((i) => i === index)
    );
    let result = await scrapers.scraper(browser, selectedCategories[0].link);
    await fs.writeFile(
      "chothuephongtro.json",
      JSON.stringify(result),
      (error) => {
        if (error) console.log("error: " + error);
        console.log("successfully!!");
      }
    );
  } catch (error) {
    console.log("error in scrape controller:", error);
  }
};

module.exports = scrapeController;
