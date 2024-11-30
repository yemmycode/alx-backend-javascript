// Importing the 'expect' function from Chai
const expect = require('chai').expect;

// Import the function to be tested
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {

  describe('SUM operation', function () {
    it('should return the sum of rounded values 1.4 and 4.5 to be 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return the subtraction of rounded values 4.5 from 1.4 to be -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return the division of rounded values 1.4 by 4.5 to be 0.2', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

});
