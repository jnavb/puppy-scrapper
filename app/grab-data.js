const puppeteer = require('puppeteer');
// Mock test
const grabData = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  const page = await browser.newPage();
  await page.goto('https://google.com');
  
  const title = await page.title();
  const outerHTML = await page.evaluate(() => document.querySelector('body').outerHTML);
  
  await browser.close();
  return { title, outerHTML };
};

module.exports = grabData;
