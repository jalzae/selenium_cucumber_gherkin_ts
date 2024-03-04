const { remote } = require('webdriverio');
var assert = require('assert')

describe('Android Battery Test', () => {
  let client;
  before(async () => {
    client = await remote({
      path: '/',
      hostname: '192.168.100.14',
      port: 4723,
      capabilities: {
        platformName: 'Android',
        'appium:app': "/Users/applemacbookprom2/Project/Test/selenium_js_example/sample.apk",
        'appium:deviceName': 'WKMJTS9PRC9DVKXS',
        'appium:appPackage': 'com.sampleapp',
        'appium:automationName': 'UiAutomator2',
      },
      logLevel: 'error',
    });
  });

  it('should calculate a sum', async () => {
    const inputA = await client.$('~inputA')
    await inputA.waitForDisplayed(5000)
    await inputA.click()
    try {
      await inputA.addValue('10')
    } catch (e) { }

    const inputB = await client.$('~inputB')
    await inputB.waitForDisplayed(5000)
    await inputB.click()
    try {
      await inputB.addValue('5')
    } catch (e) { }

    const sumElement = await client.$('~sum')
    const sum = await sumElement.getText()
    console.log(`Got value ${sum}`)
    assert.equal(sum, '15') // 10 + 5
  })

  after(async () => {
    // Close the session
    // await client.deleteSession();
  });
});
