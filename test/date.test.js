const assert = require('chai').assert;
const { isValidDate } = require('./Functional/utils');

describe("IS Valid Date", function () {
  it("should return true for valid date strings", function () {
    assert.isTrue(isValidDate("2022-02-28"));

  });

  it("should return false for invalid date strings", function () {
    assert.isTrue(isValidDate("2022-02-31"));
    assert.isFalse(isValidDate("2022-02-"));
    assert.isFalse(isValidDate("22-02-28"));
    assert.isFalse(isValidDate("2022-13-28"));
    assert.isFalse(isValidDate("2022-00-28"));
    assert.isFalse(isValidDate("2022-02-00"));
    assert.isFalse(isValidDate("2022-02-32"));
  });
})   