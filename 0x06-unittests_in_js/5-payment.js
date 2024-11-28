// Import the Utils module
const Utils = require('./utils');

// Function to calculate and log the total cost
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

// Export the function
module.exports = sendPaymentRequestToApi;

