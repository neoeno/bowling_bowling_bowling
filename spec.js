const tests = []

function it(message, testFn) {
  tests.push({
    message: message,
    testFn: testFn
  })
}

function runTests() {
  tests.forEach(function(test) {
    console.log(test.message)
    test.testFn()
  })
}

function assertEqual(a, b) {
  if (a == b) {
    console.log("Passed!")
  } else {
    console.error("Failed! %s is not equal to %s", a, b)
  }
}

it("asserts 1 == 1", function() {
  assertEqual(1, 1)
})

it("forbids 1 == 2", function() {
  assertEqual(1, 2)
})

runTests()

