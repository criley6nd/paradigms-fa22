var assert = require('assert');
var testParity = require('./parityAnalysis.js')

describe('parityAnalysis(n)', function() {
  describe('Base cases', function() {
    it('should return true when the parity is the same', function() {
      assert.equal(testParity.parityAnalysis(223), true);
    });
    it('should return false when the parity is not the same', function() {
        assert.equal(testParity.parityAnalysis(123), false);
      });
  });
  describe('Edge cases', function() {
    it('should return true with a single digit number', function() {
        assert.equal(testParity.parityAnalysis(5), true);
    });
    it('should return true with a negative number with equal parity', function() {
        assert.equal(testParity.parityAnalysis(-25), true);
    });
    it('should return true with 0', function() {
        assert.equal(testParity.parityAnalysis(0), true);
    });
  })
}); 
