const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://nest.testbirds.com/home/tester');
    await driver.findElement(By.name('username')).sendKeys('Crazypet13');
    await driver.findElement(By.name('password')).sendKeys('Hesoyam13', Key.RETURN);
    await driver.wait(until.titleIs('Szia Crazypet13!'), 5000);
  } finally {
    await driver.quit();
  }
})();