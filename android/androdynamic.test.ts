import { remote } from 'webdriverio'
import assert from 'assert'
import { initAppium } from '../src/mobileConnect';


const testData = [
  { inputValueA: 10, inputValueB: 5, expectedSum: 15 },
  { inputValueA: 5, inputValueB: 5, expectedSum: 10 },
];

testData.forEach(({ inputValueA, inputValueB, expectedSum }) => {
  describe('Test Sum', () => {
    let client: any;
    before(async () => {
      if (!client) {
        client = await initAppium();
      }
    });

    it('should calculate a sum', async () => {
      const inputA = await client.$('~inputA');
      await inputA.waitForDisplayed(5000);
      await inputA.click();
      await inputA.addValue(inputValueA.toString());

      const inputB = await client.$('~inputB');
      await inputB.waitForDisplayed(5000);
      await inputB.click();
      await inputB.addValue(inputValueB.toString());

      const sumElement = await client.$('~sum');
      const sum = await sumElement.getText();
      console.log(`Got value ${sum}`);
      assert.equal(parseInt(sum), expectedSum);
    });

    after(async () => {
      await client.deleteSession();
    });
  });

});