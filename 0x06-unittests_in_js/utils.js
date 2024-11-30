const Utils = {
  // Add the calculateNumber property with the function
  calculateNumber: function (type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (type === 'SUM') {
      return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    } else if (type === 'DIVIDE') {
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    }
    throw new Error('Invalid type');
  },
};

// Export the Utils module
module.exports = Utils;
