import { Given, Then } from '@cucumber/cucumber';
import { initAppium } from '../../src/mobileConnect';

let client: any;

Given('Apps opened normally and have some element', async () => {
  // Initialize Appium only if it hasn't been initialized yet
  if (!client) {
    client = await initAppium();
  }

  // Add code to interact with the app and verify elements
  // For example:
  console.log('client2', client)
  const someElement = await client.$('~someElement');
  await someElement.waitForDisplayed(5000);
});

Then('add some number', async () => {
  // Add code to interact with the app and add some number
});

Then('add in another input number', async () => {
  // Add code to interact with the app and add in another input number
});

Then('click result and show correct result', async () => {
  // Add code to interact with the app, click result, and verify correct result
});
