const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('handles whole numbers as floating points', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounds down the fractional part of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounds down both a and b\'s fractional parts', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounds down the fractional part of a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounds up the fractional part of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounds up both a and b\'s fractional parts', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounds up the fractional part of a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounds down a and b with fractional parts ending in 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
