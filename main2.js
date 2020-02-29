const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
//const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
//puppeteer.use(AdblockerPlugin())

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
  var email = 'captchascore1@gmail.com';//await input('Enter Email of Snipesaccount:');
  var password = 'neversettleforless';//await input('Enter Password of Snipesaccount:');
  var earlylink = 'p/nike-air_force_1__07-white%2Fwhite-00013801126425.html?chosen=size&dwvar_00013801126425_212=44'; //await input('Enter Earlylink snipes.com/:');
  const browser = await puppeteer.launch({headless: false, args:['--start-maximized',]});
  const page = await browser.newPage();
//Login
  console.log('trying to log in...');
  await page.goto('https://snipes.com/login', {waitUntil: 'networkidle2'});
  await page.type('input[type=email]', email);
  await page.type('input[type=password]', password + '\n');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  console.log('successfully logged in...');
//Cookies
  await page.click('.f-button.f-button--primary.f-button-cookie-accept.js-accept-cookie-btn');
  console.log('accepted cookies...');

  //await page.evaluate(async() => { window.scrollBy(0, 10); });
//Productpage
  console.log('going to productpage...');
  await page.goto('https://www.snipes.com/' + earlylink, {waitUntil: 'networkidle2'});
  console.log('adding to cart...');
//ATC
  await page.click('.f-pdp-button.f-pdp-button--active.js-btn-add-to-cart');
//Cart
  console.log('accessing cart...');
  await page.goto('https://snipes.com/cart');
//Checkout
  console.log('going to checkout...');
  await page.goto('https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/Checkout-Login');
//Paymentpage
  console.log('going to paymentpage...');
  await page.goto('https://www.snipes.com/checkout?stage=payment#payment');
//Selecting Paypal
  console.log('selecting paypal...');
  await page.click('.f-custom-radio-button-label.f-custom-radio-button-label--checkout.js-payment-label');
  await page.goto('https://www.snipes.com/checkout?stage=placeOrder#placeOrder');
//Placing Order
  console.log('placing order...');
  await page.click('[data-submit-event="step.placeOrder.submit"]');
//Redirecting Paypal
  console.log('getting redirected to paypal...');
  await page.waitFor(5000);
 // await browser.close();
})();
