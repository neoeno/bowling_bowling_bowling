const TestRunner = require('./TestFramework/Runner')

const t = TestRunner()

t.it("asserts 1 == 1", function() {
  t.assertEqual(1, 1)
})

t.it("forbids 1 == 2", function() {
  t.assertEqual(1, 2)
})

t.runTests()

