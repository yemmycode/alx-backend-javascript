const Utils = require('./utils');

// Define the sendPaymentRequestToApi function
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Call Utils.calculateNumber with type 'SUM'
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Display the result in the console
  console.log(`The total is: ${result}`);
}

// Export the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
