const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

let driver_fx = new webdriver.Builder().forBrowser("chrome").build();

searchTest(driver_fx);

function searchTest(driver) {
  driver.get("http://www.google.com");
  driver.findElement(By.name("q")).sendKeys("webdriver");

  driver.sleep(3000).then(() => {
    driver.findElement(By.name("q")).sendKeys(webdriver.Key.ENTER);
  });


  driver.sleep(5000).then(() => {
    driver.getTitle().then((title) => {
      console.log('Title : ', title)
      if (title.includes("webdriver")) {
        console.log("Test passed");
      } else {
        console.log("Test failed");
      }
      driver.quit();
    });
  });
}
