const chalk = require('chalk')

const tests = []

function it(message, testFn) {
  tests.push({
    message: message,
    testFn: testFn
  })
}

function runTests() {
  var haveMyTestsFailed = false
  tests.forEach(function(test) {
    console.log(chalk.cyan(test.message))
    try {
      test.testFn()
      console.log(chalk.green("Passed!"))
    } catch (e) {
      haveMyTestsFailed = true
      console.log(chalk.red("Test failed! %s"), e)
    }
  })
  if (haveMyTestsFailed) {
    console.log("At least one of your tests failed")
  } else {
    console.log(chalk.green("All your tests passed!"))
  }
}

function assertEqual(a, b) {
  if (a != b) {
    throw a + " is not equal to " + b
  }
}

it("asserts 1 == 1", function() {
  assertEqual(1, 1)
})

it("forbids 1 == 2", function() {
  assertEqual(1, 2)
})

runTests()

