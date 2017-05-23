const TestFramework = require('./TestFramework')
const TestFrameworkReporterFactory = require('./Reporter')
const TestStatus = require('./TestStatus')

function RunnerFactory() {
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
      const testResult = runSingleTest(test)
      reporter.reportSingleTestResult(testResult)
      if (statusSoFar === TestFramework.TEST_PASSED) {
        return testResult.getStatus()
      } else {
        return TestFramework.TEST_FAILED
      }
    }, TestFramework.TEST_PASSED)

    reporter.reportSuiteStatus(testSuiteStatus)
  }

  function runSingleTest(test) {
    reporter.reportTestStart(test)
    try {
      test.testFn()
      return TestStatus(TestFramework.TEST_PASSED)
    } catch (e) {
      return TestStatus(TestFramework.TEST_FAILED, e)
    }
  }

  function assertEqual(a, b) {
    if (a != b) {
      throw `${a} does not equal ${b}`
    }
  }

  return {
    it: it,
    runTests: runTests,
    assertEqual: assertEqual
  }
}

module.exports = RunnerFactory
