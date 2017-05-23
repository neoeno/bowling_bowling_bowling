const TestFrameworkFactory = require('./TestFramework/TestFramework')

const t = TestFrameworkFactory()

t.it("asserts 1 == 1", function() {
  t.assertEqual(1, 1)
})

t.it("forbids 1 == 2", function() {
  t.assertEqual(1, 2)
})

t.runTests()

