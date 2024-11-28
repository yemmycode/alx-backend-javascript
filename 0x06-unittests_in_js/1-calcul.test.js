const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('When type is "SUM"', () => {
    it('Adding equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('Adding equal positive numbers (alternative)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('Adding equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('Adding equal negative numbers (alternative)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('Adding a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('Adding a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('Adding zero and zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('When type is "SUBTRACT"', () => {
    it('Subtracting equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('Subtracting equal positive numbers (alternative)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('Subtracting equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('Subtracting equal negative numbers (alternative)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('Subtracting a positive number from a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('Subtracting a negative number from a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('Subtracting zero and zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('When type is "DIVIDE"', () => {
    it('Dividing two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('Dividing numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('Dividing numbers with different signs (alternative)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('Dividing two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('Dividing equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('Dividing equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('Dividing equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('Dividing equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('Dividing zero and a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('Dividing zero and a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('Dividing a positive number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('Dividing a positive number by a value rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('Dividing a positive number by a value rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('Dividing a negative number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('Dividing a negative number by a value rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('Dividing a negative number by a value rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('Dividing zero by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});

