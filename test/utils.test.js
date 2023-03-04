const assert = require('assert');
const {checkGender } = require('./utils');

// Tạo test suite
describe('Gender check', function() {
  // Tạo test case cho giới tính nam
  it('should return "male" for a male user', function() {
    const user = {
      name: 'John',
      gender: 'male'
    };
    const result = checkGender(user);
    assert.strictEqual(result, 'male');
  });

  // Tạo test case cho giới tính nữ
  it('should return "female" for a female user', function() {
    const user = {
      name: 'Jane',
      gender: 'female'
    };
    const result = checkGender(user);
    assert.strictEqual(result, 'female');
  });

  // Tạo test case cho giới tính không xác định
  it('should return "unknown" for an unknown gender', function() {
    const user = {
      name: 'Alex',
      gender: ''
    };
    const result = checkGender(user);
    assert.strictEqual(result, 'unknown');
  });
});