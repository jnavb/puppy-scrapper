
const puppeteer = require('puppeteer');
const bases = require('./base_url');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(bases.one);
	const links = await page.evaluate(() =>
		Array.from(document.querySelectorAll('a.img.js-pop'))
			.map(res => {
				const link = res.attributes[0].nodeValue;
				return link.slice(0, link.length);
			})
	);

	console.log(links);

	await browser.close();
})();