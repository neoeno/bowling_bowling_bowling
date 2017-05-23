function calculateBowlingScore(rollList, frame = 0, score = 0) {
  console.log(rollList, score, frame)
  const newFrame = frame + 1

  if (frame == 9) {
    return score + sum(rollList)
  }

  if (rollList.length == 0) {
    return score
  }

  if (isStrike(rollList)) {
    score = score + sum(take(rollList, 3))
    const restRolls = drop(rollList, 1)
    return calculateBowlingScore(restRolls, newFrame, score)

  } else if(isSpare(rollList)) {
    score = score + sum(take(rollList, 3))
    const restRolls = drop(rollList, 2)
    return calculateBowlingScore(restRolls, newFrame, score)

  } else {
    score = score + sum(take(rollList, 2))
    const restRolls = drop(rollList, 2)
    return calculateBowlingScore(restRolls, newFrame, score)
  }
}

function sum(list) {
  return list.reduce(function(total, n) {
    return total + n
  }, 0)
}

function take(list, n) {
  return list.slice(0, n)
}

function drop(list, n) {
  return list.slice(n)
}

function isStrike(list) {
  return list[0] == 10
}

function isSpare(list) {
  return list[0] + list[1] == 10
}

module.exports = calculateBowlingScore
