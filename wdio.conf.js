exports.config = {
    path: '/', // The default path for Appium
    hostname: '192.168.100.14',
    port: 4723, // The default port for Appium
    specs: ['./test.js'], // Your test script file
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'U48TZ5YTKZOJCQ4D',
            'appium:app': "/Users/applemacbookprom2/Project/Test/selenium_js_example/sample.apk",
            'appium:appPackage': 'com.sampleapp',
            'appium:automationName': 'UiAutomator2',
        },
    ],
    logLevel: 'error',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
    },
};
