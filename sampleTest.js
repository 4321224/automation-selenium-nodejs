const { Builder, By, Key, until } = require("selenium-webdriver");


(async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.manage().setTimeouts({ implicit: 1000 });
      await driver.get("https://www.elefin.id/");
      // await driver.manage().window().fullscreen()

      await driver
        .findElement(By.xpath("//button/div[contains(text(), 'Accept all')]"))
        .click();
    //   const search_box = driver.findElement(By.name("q"));
    //   search_box.sendKeys("webdriver", Key.ENTER);
    //   await driver.wait(until.titleIs("webdriver - Google Seach"), 1000);
    } finally {
    //   await driver.quit();
    }
  })();
