
const assert = require('assert');
const {login } = require('./Functional/utils');

const testCases = [
  { username: 'user1', password: '123', expected: true },
  { username: 'invalidName', password: 'invalidPwd', expected: false },
  { username: 'user1', password: 'invalidPwd', expected: false },
  { username: 'invalidName', password: '123', expected: false },
];

describe('Login Function', function() {
  testCases.forEach(function(testCase) {
    it(`should return ${testCase.expected} for ${testCase.username}/${testCase.password}`, function() {
      const result = login(testCase.username, testCase.password);
      assert.strictEqual(result, testCase.expected);
    });
  });
});


