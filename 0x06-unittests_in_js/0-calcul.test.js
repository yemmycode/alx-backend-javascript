const assert = require('assert');
const calculateNumber = require('./0-calcul');  // Import the function

describe('calculateNumber', function () {

  it('should round 1 to 1 and 3 to 3, and return 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round 1 to 1 and 3.7 to 4, and return 5', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round 1.2 to 1 and 3.7 to 4, and return 5', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 to 2 and 3.7 to 4, and return 6', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
