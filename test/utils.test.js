const assert = require('assert');
const {checkGender } = require('./Functional/utils');


describe('Gender check', function() {

  it('should return "male" for a male user', function() {
    const user = {
      name: 'John',
      gender: 'male'
    };
    const result = checkGender(user);
    assert.strictEqual(result, 'male');
  });


  it('should return "female" for a female user', function() {
    const user = {
      name: 'Jane',
      gender: 'female'
    };
    const result = checkGender(user);
    assert.strictEqual(result, 'female');
  });


  it('should return "unknown" for an unknown gender', function() {
    const user = {
      name: 'Alex',
      gender: ''
    };
    const result = checkGender(user);
    assert.strictEqual(result, 'unknown');
  });
});


//Để đảm bảo rằng nó hoạt đọng chính xác với giá trị đầu vào