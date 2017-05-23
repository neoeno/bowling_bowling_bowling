const chalk = require('chalk')

const TEST_FAILED = "fhewaighewuigawueighuiaweghewui"
const TEST_PASSED = "gewahgaewgeawjgieawjgieawogaewi"

function TestFrameworkFactory() {
  const tests = []

  function it(message, testFn) {
    tests.push({
      message: message,
      testFn: testFn
    })
  }

  function runTests() {
    const testSuiteStatus = tests.reduce(function(statusSoFar, test) {
      if (statusSoFar === TEST_PASSED) {
        return runSingleTest(test)
      } else {
        runSingleTest(test)
        return TEST_FAILED
      }
    }, TEST_PASSED)

    reportSuiteStatus(testSuiteStatus)
  }

  function runSingleTest(test) {
    console.log(chalk.cyan(test.message))
    try {
      test.testFn()
      console.log(chalk.green("Passed!"))
      return TEST_PASSED
    } catch (e) {
      console.log(chalk.red("Test failed! %s"), e)
      return TEST_FAILED
    }
  }

  function reportSuiteStatus(status) {
    if (status === TEST_PASSED) {
      console.log(chalk.green("All your tests passed!"))
    } else {
      console.log(chalk.red("At least one of your tests failed"))
    }
  }

  function assertEqual(a, b) {
    if (a != b) {
      throw a + " is not equal to " + b
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

