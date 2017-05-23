const config = require('./Config')
const TestFrameworkReporterFactory = require('./Reporter')

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
      if (statusSoFar === config.TEST_PASSED) {
        const testResult = runSingleTest(test)
        reporter.reportSingleTestResult(testResult)
        return testResult
      } else {
        const testResult = runSingleTest(test)
        reporter.reportSingleTestResult(testResult)
        return config.TEST_FAILED
      }
    }, config.TEST_PASSED)

    reporter.reportSuiteStatus(testSuiteStatus)
  }

  function runSingleTest(test) {
    reporter.reportTestStart(test)
    try {
      test.testFn()
      return config.TEST_PASSED
    } catch (e) {
      return config.TEST_FAILED
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

module.exports = TestFrameworkFactory
