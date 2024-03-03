const reporter = require('cucumber-html-reporter');

const htmlReportOptions = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  screenshotsDirectory: 'screenshots/',
  storeScreenshots: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome',
    'Platform': 'Windows 10',
    'Parallel': 'Scenarios',
    'Executed': 'Remote',
  },
};

reporter.generate(htmlReportOptions);
