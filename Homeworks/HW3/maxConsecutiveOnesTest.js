var assert = require('assert');
var demoFib = require('./fixedMaxConsecutiveOnes')

describe('findMaxConsecutiveOnes(nums)', function() {
    it('example test', function() {
        assert.equal(demoFib.maxConsecutiveOnes( [1,1,0,1,1,1]), 3);
    });
    it('test1', function() {
        assert.equal(demoFib.maxConsecutiveOnes([1,1,1, 6, 1, 1, 1]), 3);
        });
  it('test2', function() {
    assert.equal(demoFib.maxConsecutiveOnes([3, 4, 1]), 1);
  });
  it('test3', function() {
    assert.equal(demoFib.maxConsecutiveOnes([1, 1, 3, 4, 1, 1, 3]), 2);
  });
}); 
