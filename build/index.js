"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = __importDefault(require("selenium-webdriver"));
const By = selenium_webdriver_1.default.By;
const until = selenium_webdriver_1.default.until;
let driver_fx = new selenium_webdriver_1.default.Builder().forBrowser("chrome").build();
searchTest(driver_fx);
function searchTest(driver) {
    driver.get("http://www.google.com");
    driver.findElement(By.name("q")).sendKeys("webdriver");
    driver.sleep(3000).then(() => {
        driver.findElement(By.name("q")).sendKeys(selenium_webdriver_1.default.Key.ENTER);
    });
    driver.sleep(5000).then(() => {
        driver.getTitle().then((title) => {
            console.log('Title : ', title);
            if (title.includes("webdriver")) {
                console.log("Test passed");
            }
            else {
                console.log("Test failed");
            }
            driver.quit();
        });
    });
}
