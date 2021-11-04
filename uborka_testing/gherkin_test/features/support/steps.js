// features/support/steps.js
const { firefox } = require('playwright');
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const lofasz = require("./helper");

Given("a variable set to {int}", function (number) {
  //console.log(number);
  this.setTo(number);
  //lofasz.test();
});

Given("test", { timeout: 10000 }, async function () {
  const browser = await firefox.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://www.uitestingplayground.com/sampleapp');
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  });
  await page.waitForSelector('[name="Password"]');
  await page.fill('[name="Password"]', 'pasw00rd');
  await page.waitForSelector('[placeholder="User Name"]');
  await page.fill('[placeholder="User Name"]', 'Hello');
  await page.waitForSelector('[id="login"]');
  await page.click('[id="login"]');
  console.log(dimensions);
  await page.waitForSelector('[id="loginstatus"]');
  let status = await page.innerText('[id="loginstatus"]');
  console.log(status);
  const expactedMessage = "Invalid username/password";
  assert.ok(expactedMessage == status, "YOU FUCKED UP");
  await page.waitForTimeout(5000);
  await browser.close();
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});
