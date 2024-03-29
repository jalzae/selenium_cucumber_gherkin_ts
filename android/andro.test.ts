import { remote } from 'webdriverio'
import assert from 'assert'
import { initAppium } from '../src/mobileConnect';

describe('Test Sum', () => {
  let client:any;
  before(async () => {
    if (!client) {
      client = await initAppium();
    }
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
    assert.equal(sum, '15')
  })

  after(async () => {
    await client.deleteSession();
  });
});
