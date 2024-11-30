const assert = require('assert');
const calculateNumber = require('./1-calcul');  // Import the function

describe('calculateNumber', function () {

  describe('SUM operation', function () {
    it('should return the sum of rounded values 1.4 and 4.5 to be 6', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return the subtraction of rounded values 4.5 from 1.4 to be -4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return the division of rounded values 1.4 by 4.5 to be 0.2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

});
