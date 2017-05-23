const chalk = require('chalk')

const TEST_FAILED = "fhewaighewuigawueighuiaweghewui"
const TEST_PASSED = "gewahgaewgeawjgieawjgieawogaewi"

function TestFrameworkReporterFactory() {
  function reportSingleTestResult(testResult) {
    if (testResult === TEST_PASSED) {
      console.log(chalk.green("Passed!"))
    } else {
      console.log(chalk.red("Test failed!"))
    }
  }

  function reportSuiteStatus(status) {
    if (status === TEST_PASSED) {
      console.log(chalk.green("All your tests passed!"))
    } else {
      console.log(chalk.red("At least one of your tests failed"))
    }
  }

  return {
    reportSingleTestResult: reportSingleTestResult,
    reportSuiteStatus: reportSuiteStatus
  }
}

function TestFrameworkFactory() {
  const tests = []
  const reporter = TestFrameworkReporterFactory()

  function it(message, testFn) {
    tests.push({
      message: message,
      testFn: testFn
    })
  }

  function runTests() {
    const testSuiteStatus = tests.reduce(function(statusSoFar, test) {
      if (statusSoFar === TEST_PASSED) {
        const testResult = runSingleTest(test)
        reporter.reportSingleTestResult(testResult)
        return testResult
      } else {
        const testResult = runSingleTest(test)
        reporter.reportSingleTestResult(testResult)
        return TEST_FAILED
      }
    }, TEST_PASSED)

    reporter.reportSuiteStatus(testSuiteStatus)
  }

  function runSingleTest(test) {
    console.log(chalk.cyan(test.message))
    try {
      test.testFn()
      return TEST_PASSED
    } catch (e) {
      return TEST_FAILED
    }
  }

  function assertEqual(a, b) {
    if (a != b) {
      throw "Nothing of any importance"
    }
  }

  return {
    it: it,
    runTests: runTests,
    assertEqual: assertEqual
  }
}

const t = TestFrameworkFactory()

t.it("asserts 1 == 1", function() {
  t.assertEqual(1, 1)
})

t.it("forbids 1 == 2", function() {
  t.assertEqual(1, 2)
})

t.runTests()

