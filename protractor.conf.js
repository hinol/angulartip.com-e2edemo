// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
var path = require('path');

exports.config = {

    allScriptsTimeout: 500000,
    getPageTimeout: 60000,
    specs: [
        './e2e/features/**/*.feature'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['./e2e/features/**/*.steps.ts'],
        format: ['json:' + path.resolve(__dirname + '/e2e-reports/protractor-cucumber-report.json')],
        tags: ['~@ignore']
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    SELENIUM_PROMISE_MANAGER: false,

    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
    },
};
