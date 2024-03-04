import { remote } from 'webdriverio';
require('dotenv').config();

export const initAppium = async () => {
  const client = await remote({
    path: process.env.APPIUM_PATH,
    hostname: process.env.APPIUM_HOST,
    port: parseInt(process.env.APPIUM_PORT as string),
    capabilities: {
      platformName: 'Android',
      'appium:app': process.env.APPIUM_APP_PATH,
      'appium:deviceName': process.env.APPIUM_DEVICE_NAME,
      'appium:appPackage': process.env.APPIUM_APP_PACKAGE,
      'appium:automationName': process.env.APPIUM_AUTOMATION_NAME,
    },
    logLevel: 'error',
  });

  return client
}