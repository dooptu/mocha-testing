describe("IS Valid Date", function () {
    it("should return true for valid date strings", function () {
      chai.expect(isValidDate("2022-02-28")).to.equal(true);
    });
  
    it("should return false for invalid date strings", function () {
      chai.expect(isValidDate("2022-02-31")).to.equal(false);
      chai.expect(isValidDate("2022-02-")).to.equal(false);
      chai.expect(isValidDate("22-02-28")).to.equal(false);
      chai.expect(isValidDate("2022-13-28")).to.equal(false);
      chai.expect(isValidDate("2022-00-28")).to.equal(false);
      chai.expect(isValidDate("2022-02-00")).to.equal(false);
      chai.expect(isValidDate("2022-02-32")).to.equal(false);
    });
  });