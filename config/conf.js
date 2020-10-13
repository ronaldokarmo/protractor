const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "https://digitaldev.hdevelo.com.br/site-md-farol",
  directConnect: true,
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: [
    '../monetizacao/farol/features/*.feature'
  ],
  //resultJsonOutputFile: "./reports/json/protractor_report.json",
  
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    require('babel-register');
    Reporter.createDirectory(jsonReports);
  },
  
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: [
        '../monetizacao/farol/stepDefinitions/*.steps.js', // accepts a glob
        '../monetizacao/support/*.js'
      ],
    //tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)" // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};
