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
  var earlylink = 'p/nike-air_force_1__07-white%2Fwhite-00013801126425.html?chosen=size&dwvar_00013801126425_212=41' ;//await input('enter earlylink after snipes.com/');
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
//Snipes Login
  await page.goto('https://snipes.com/login', {waitUntil: 'networkidle2'});
  console.log('logging in...');
  await page.type('input[type=email]', email);
  await page.type('input[type=password]', password + '\n');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  console.log('logged in successful');

//Productpage
  await page.goto('
  
  //await page.evaluate(async() => { window.scrollBy(0, 10); });

  await page.goto('https://snipes.com/login', {waitUntil: 'networkidle2'});

  await page.waitFor(5000);
  await browser.close();
})();