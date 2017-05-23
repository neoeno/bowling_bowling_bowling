const TestRunner = require('./TestFramework/Runner')
const calculateBowlingScore = require('./calculateBowlingScore')

const t = TestRunner()

t.it("calculates one frame", function() {
  const bowlingGame = [1, 2]
  const finalScore = 3

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.it("calculates one strike and two rolls", function() {
  const bowlingGame = [10, 2, 3]
  const finalScore = 10 + (2 * (2 + 3))

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.it("calculates one strike and four rolls", function() {
  const bowlingGame = [10, 2, 3, 1, 1]
  const finalScore = 10 + (2 * (2 + 3)) + 1 + 1

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.it("calculates one spare and two rolls", function() {
  const bowlingGame = [5, 5, 3, 1]
  const finalScore = 5 + 5 + (3 * 2) + 1

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.it("calculates a golden game", function() {
  const bowlingGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  const finalScore = 300

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.it("calculates an off-golden game", function() {
  const bowlingGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 9, 10]
  const finalScore = 271

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.it("calculates a typical game", function() {
  const bowlingGame = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
  const finalScore = 133

  const result = calculateBowlingScore(bowlingGame)

  t.assertEqual(result, finalScore)
})

t.runTests()
