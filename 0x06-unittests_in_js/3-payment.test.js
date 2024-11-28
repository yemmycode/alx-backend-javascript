import Utils from './utils.js';

// Function to send payment request and log the total cost
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by summing the amount and shipping
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  
  // Log the result to the console
  console.log(`The total is: ${totalCost}`);
};

export default sendPaymentRequestToApi;

