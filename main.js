const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin())

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
  var email = 'captchascore1@gmail.com';//await input('email bidde:');
  var password = 'neversettleforless';//await input('passwort bidde:');

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});

  await page.goto('https://snipes.com/login', {waitUntil: 'networkidle2'});
  await page.type('input[type=email]', email);
  await page.type('input[type=password]', password + '\n');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  console.log('logged in');

  //await page.evaluate(async() => { window.scrollBy(0, 10); });

  await page.goto('https://www.snipes.com/p/jordan-air_jordan_1_mid-black%2Fpine_green%2Fwhite%2Fgym_red-00013801788237.html?chosen=size&dwvar_00013801126425_212=45', {waitUntil: 'networkidle2'});
  await page.click('.f-pdp-button.f-pdp-button--active.js-btn-add-to-cart');

  await page.waitFor(5000);
  await browser.close();
})();
