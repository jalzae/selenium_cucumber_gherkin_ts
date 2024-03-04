// wdio.conf.js
exports.config = {
    runner: 'local',
    path: process.env.APPIUM_PATH,
    hostname: process.env.APPIUM_HOST,
    port: parseInt(process.env.APPIUM_PORT),
    specs: ['./android/**/*.feature'],
    capabilities: [
        {
            maxInstances: 1,
            'appium:platformName': 'Android',
            'appium:app': process.env.APPIUM_APP_PATH,
            'appium:deviceName': process.env.APPIUM_DEVICE_NAME,
            'appium:appPackage': process.env.APPIUM_APP_PACKAGE,
            'appium:automationName': process.env.APPIUM_AUTOMATION_NAME,
        },
    ],
    logLevel: 'info',
    framework: 'cucumber',
    cucumberOpts: {
        requireModule: ['ts-node/register'],
        require: ['./features/android/**/*.ts'],
        format: ['pretty'],
        strict: false,
    },
    services: ['appium'],
    port: parseInt(process.env.APPIUM_PORT),
    baseUrl: process.env.APPIUM_PATH,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
    },
    afterStep: function (uri, feature, scenario, step, result) {
        browser.takeScreenshot();
    },
    after: function (exitCode, config, capabilities) {
        generateCucumberReport();
    },
};

function generateCucumberReport() {
    const cucumberHtmlReporter = require('cucumber-html-reporter');

    const options = {
        theme: 'bootstrap',
        jsonFile: './cucumber-report.json',
        output: './cucumber-report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        screenshotsDirectory: 'screenshots/',
        storeScreenshots: true,
        metadata: {
            'App Version': '1.0.0',
            'Test Environment': 'Local',
            'Browser': 'Chrome',
            'Platform': 'OSX',
        },
    };

    cucumberHtmlReporter.generate(options);
}
