const TestFramework = require('./TestFramework')
const chalk = require('chalk')

function ReporterFactory() {
  function reportSingleTestResult(testResult) {
    if (testResult === TestFramework.TEST_PASSED) {
      console.log(chalk.green("Passed!"))
    } else {
      console.log(chalk.red("Test failed!"))
    }
  }

  function reportSuiteStatus(status) {
    if (status === TestFramework.TEST_PASSED) {
      console.log(chalk.green("All your tests passed!"))
    } else {
      console.log(chalk.red("At least one of your tests failed"))
    }
  }

  function reportTestStart(test) {
    console.log(chalk.cyan(test.message))
  }

  return {
    reportSingleTestResult: reportSingleTestResult,
    reportSuiteStatus: reportSuiteStatus,
    reportTestStart: reportTestStart
  }
}

module.exports = ReporterFactory
