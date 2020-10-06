const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name":"Demo Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Ubuntu",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options)