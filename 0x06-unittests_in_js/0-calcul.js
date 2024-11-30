function calculateNumber(a, b) {
  // Round both a and b to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  
  // Return the sum of the rounded numbers
  return roundedA + roundedB;
}

module.exports = calculateNumber;  // Export the function for use in other files

