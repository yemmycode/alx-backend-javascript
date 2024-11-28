/**
 * Test Suite: getPaymentTokenFromAPI
 * Description: Verifies the behavior of the getPaymentTokenFromAPI function.
 *              Ensures it resolves with the expected object when the `success` parameter is true.
 * Dependencies:
 *   - chai: Used for assertions.
 *   - getPaymentTokenFromAPI: The function being tested.
 */

import { expect } from 'chai';  // Using ES Module syntax for importing 'expect'
import getPaymentTokenFromAPI from './6-payment_token.js';  // Using ES Module syntax for importing the function

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});

