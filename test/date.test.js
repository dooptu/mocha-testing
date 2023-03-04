const assert = require('assert');
const {isValidDate } = require('./utils');

describe("IS Valid Date", function () {
    it("should return true for valid date strings", function () {
      assert.strictEqual(isValidDate("2022-02-28"), true);
    });
  
    it("should return false for invalid date strings", function () {
      assert.strictEqual(isValidDate("2022-02-31"), false);
      assert.strictEqual(isValidDate("2022-02-"), false);
      assert.strictEqual(isValidDate("22-02-28"), false);
      assert.strictEqual(isValidDate("2022-13-28"), false);
      assert.strictEqual(isValidDate("2022-00-28"), false);
      assert.strictEqual(isValidDate("2022-02-00"), false);
      assert.strictEqual(isValidDate("2022-02-32"), false);
    });
  });