const assert = require("assert");
const {divideByZero } = require('./Functional/utils');
describe("DivideByZero", () => {
  it("should throw an error when dividing by zero", () => {
    assert.throws(() => divideByZero(1, 0), Error);
  });

  it("should return the correct result when dividing by a non-zero number", () => {
    assert.strictEqual(divideByZero(4, 2), 2);
  });
});