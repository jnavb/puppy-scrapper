const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const url = 'https://elpais.com/internacional/';
	await page.goto(url);
	const articleTitles = await page.evaluate(() =>
		Array.from(document.getElementsByClassName('articulo-titulo'))
			.map(parent => parent.firstElementChild.innerHTML));
	await page.screenshot({
		path: 'example.png'
	});

	console.log(articleTitles);

	await browser.close();
})();