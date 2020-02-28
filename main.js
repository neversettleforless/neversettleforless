const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
  return new Promise(function(resolve, reject) {
	rl.question(prompt, function(x) {
      resolve(x, reject);
	});
  });
}

(async () => {
var n = await input("Number: ");
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://developers.google.com/web/', {waitUntil: 'networkidle2'});
  await page.type('#searchbox input', 'Headless Chrome');
  //await page.screenshot({path: 'screen.jpg', fullPage: true});
  await page.waitFor(5000);
  await browser.close();
})();
