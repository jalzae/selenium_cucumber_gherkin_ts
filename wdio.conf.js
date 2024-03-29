// wdio.conf.js
exports.config = {
    runner: 'local',
    path: process.env.APPIUM_PATH,
    hostname: process.env.APPIUM_HOST,
    port: parseInt(process.env.APPIUM_PORT),
    specs: ['./android/**/*.test.ts'],
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
    framework: 'mocha',
    services: [
        ['appium', {
            command: 'appium',
            logPath: './logs/'
        }]
    ],

    port: parseInt(process.env.APPIUM_PORT),
    baseUrl: process.env.APPIUM_PATH,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    reporters: ['spec', ["html-nice", {
        outputDir: './android/report/',
        filename: 'report.html',
        reportTitle: 'Test Report Title',
        linkScreenshots: true,
        showInBrowser: true,
        collapseTests: false,
        useOnAfterCommandForScreenshot: false
    }
    ]],
    mochaOpts: {
        timeout: 60000,
    },
    afterStep: function (uri, feature, scenario, step, result) {
        browser.takeScreenshot();
    },
    after: function (exitCode, config, capabilities) {
        // generateCucumberReport();
    },
};

