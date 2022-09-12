var assert = require('assert');
var demoFib = require('./question2')

describe('findMaxConsecutiveOnes(nums)', function() {
  describe('Base recursion cases', function() {
    it('should return length when all are ones', function() {
      assert.equal(demoFib.findMaxConsecutiveOnes([1,1,1]), 3);
    });
    it('should return the max length in an array of not just ones', function() {
        assert.equal(demoFib.findMaxConsecutiveOnes([1,1,1, 6, 1, 1]), 3);
      });
  });
  it('should return zero with no ones', function() {
    assert.equal(demoFib.findMaxConsecutiveOnes([3, 4]), 0);
  });
}); 
