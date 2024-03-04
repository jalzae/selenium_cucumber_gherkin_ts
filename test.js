const { remote } = require('webdriverio');
var assert = require('assert')

describe('Android Battery Test', () => {
  let client;
  before(async () => {
    client = await remote({
      path: process.env.APPIUM_PATH,
      hostname: process.env.APPIUM_HOST,
      port: parseInt(process.env.APPIUM_PORT),
      capabilities: {
        platformName: 'Android',
        'appium:app': process.env.APPIUM_APP_PATH,
        'appium:deviceName': process.env.APPIUM_DEVICE_NAME,
        'appium:appPackage': process.env.APPIUM_APP_PACKAGE,
        'appium:automationName': process.env.APPIUM_AUTOMATION_NAME,
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
