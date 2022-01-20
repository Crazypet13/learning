const { Before, After, BeforeStep, AfterStep, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { firefox } = require('playwright');

const { setPage,setBrowser,getBrowser } = require('./e2e_helper');



Before(function () {
    console.log("this is a before:3");
});

BeforeStep(function () {
    console.log("this is a before STEP:D");
});

BeforeAll({ tag: "@e2e" }, async function () {
    console.log("Before all");
    const browser = await firefox.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    setPage(page);
    setBrowser(browser);
});

After({ tags: "@id-3 or @id-2" }, function () {
    console.log("AFTER 8");
});

AfterStep(function () {
    console.log("AFTER STEP");
});


AfterAll(async function () {
    console.log("AFTER all");
    let browser = getBrowser()
    await browser.close();
});