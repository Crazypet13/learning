// features/support/steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

const lofasz = require("./helper");
const { getPage } = require('./e2e_helper');

Given("a variable set to {int}", function (number) {
  //console.log(number);
  this.setTo(number);
  //lofasz.test();
});

Given("i navigate to {string}", async function (url) {
  let page = getPage();
  await page.goto(url)
});

When("i fill password with {string}", async function (password) {
  let page = getPage();
  await page.waitForSelector('[name="Password"]');
  await page.fill('[name="Password"]', password);
});

When('i fill username with {string}', async function (name) {
  let page = getPage();
  await page.waitForSelector('[placeholder="User Name"]');
  await page.fill('[placeholder="User Name"]', name);
});

When('i push log in button', async function () {
  let page = getPage();
  await page.waitForSelector('[id="login"]');
  await page.click('[id="login"]');
})

Then("i validate login message what is {string}", async function (errorMessage) {
  let page = getPage();
  let status;
  await page.waitForSelector('[id="loginstatus"]');
  status = await page.innerText('[id="loginstatus"]');
  assert.ok(errorMessage == status, "YOU FUCKED UP");
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});
