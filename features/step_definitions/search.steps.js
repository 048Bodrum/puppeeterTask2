const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After, setDefaultTimeout } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

setDefaultTimeout(70000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php${string}`);
  });

When("user click by data", async function () {
  return await clickElement(this.page, "[data-time-stamp='1750885200']");
});

When("user click by seance time", async function () {     
  return  await clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='217']");
});

When("user click by chair", async function () {
  return await clickElement(this.page, ".buying-scheme__chair.buying-scheme__chair_standart");
});

When("user click by button", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
         
Then("user sees title {string}", async function (string) {
   const actual = await getText(this.page, ".ticket__hint");
   const expected = await string;
   expect(actual).contains(expected);
});


When("user click by seance time2", async function () {
  return await clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='228']");
});

When("user click by chair2", async function () {
  return await clickElement(this.page, ".buying-scheme__chair.buying-scheme__chair_standart");
});

When("user click by button2", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

When("user click by second button", async function () {
  return await clickElement(this.page, ".acceptin-button", onclick="[location.href='scripts/sale_save.php']");
});
    
Then("user sees title2 {string}", async function (string) {
  const actual = await getText(this.page, ".ticket__info");
  const expected = await string;
  expect(actual).contains(expected);
});


When("user click by past seance time", async function () {
  return await clickElement(this.page, ".movie-seances__time-block");
});

Then("button is disabled", async function () {
   const button = await this.page.$("button.acceptin-button");
   const isDisabled = await this.page.evaluate((button) => "button.disabled", button);
   expect(isDisabled).to.eql("button.disabled");
  });



     
 