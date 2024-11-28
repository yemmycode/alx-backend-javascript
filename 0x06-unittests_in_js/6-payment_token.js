/**
 * Function: getPaymentTokenFromAPI
 * Description: Simulates an API call that returns a promise. 
 *              If the `success` parameter is true, it resolves with a response object.
 * Parameters:
 *   - success (boolean): Determines whether the promise should resolve.
 * Returns:
 *   - Promise: Resolves with an object containing API response data if `success` is true.
 */

const getPaymentTokenFromAPI = (success) => 
  new Promise((resolve, _reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
  });

module.exports = getPaymentTokenFromAPI;
