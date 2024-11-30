const assert = require('assert');

describe('Sample Test Suite', function () {
  it('should return true for a valid test case', function () {
    assert.strictEqual(true, true);  // Use assert to check if values are equal
  });

  it('should add numbers correctly', function () {
    const sum = 2 + 3;
    assert.strictEqual(sum, 5);  // Check if the sum is correct
  });
});
