const cucumber = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');

module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require features/**/*.ts",
    "--format json:cucumber-report.json",
  ].join(" "),
  afterLaunch: async function () {
    const htmlReportOptions = {
      theme: 'bootstrap',
      jsonFile: 'result/cucumber-report.json',
      output: 'result/cucumber-report.html',
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
  },
};


