// 

describe('Is Valid Email', function() {
  it('should return true for a valid email', function() {
    assert.strictEqual(isValidEmail('test@example.com'), true);
    chai.expect(isValidEmail("test@example.com")).to.equal(true)
  });

  it('should return false for an email with no domain', function() {
    assert.strictEqual(isValidEmail('test@'), false);
  });

  it('should return false for an email with no username', function() {
    assert.strictEqual(isValidEmail('@example.com'), false);
  });

  it('should return false for an email with no "@" symbol', function() {
    assert.strictEqual(isValidEmail('test.example.com'), false);
  });

  it('should return false for an email with spaces', function() {
    assert.strictEqual(isValidEmail('test @ example.com'), false);
  });

  it('should return false for an email with special characters in the domain', function() {
    assert.strictEqual(isValidEmail('test@example!.com'), false);
  });
});