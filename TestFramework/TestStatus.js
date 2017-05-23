const TestFramework = require('./TestFramework')

function TestStatus(status, message) {
  function didPass() {
    return status == TestFramework.TEST_PASSED
  }

  function didFail() {
    return status == TestFramework.TEST_FAILED
  }

  function getStatus() {
    return status
  }

  function getMessage() {
    return message
  }

  return {
    didPass: didPass,
    didFail: didFail,
    getStatus: getStatus,
    getMessage: getMessage
  }
}

module.exports = TestStatus
