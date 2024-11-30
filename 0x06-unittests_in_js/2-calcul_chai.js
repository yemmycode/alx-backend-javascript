function calculateNumber(type, a, b) {
  // Round both a and b
  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUM') {
    // When type is SUM, return the sum of a and b
    return a + b;
  }

  if (type === 'SUBTRACT') {
    // When type is SUBTRACT, subtract b from a
    return a - b;
  }

  if (type === 'DIVIDE') {
    // When type is DIVIDE, divide a by b
    if (b === 0) {
      return 'Error';  // Return 'Error' if b is 0
    }
    return a / b;
  }

  return 'Invalid type';  // Return 'Invalid type' if an unsupported type is provided
}

module.exports = calculateNumber;
