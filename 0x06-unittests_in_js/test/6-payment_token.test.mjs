import { expect } from 'chai';
import getPaymentTokenFromAPI from './6-payment_token.js';

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate the test has completed
      })
      .catch((err) => done(err)); // Ensure done is called with an error in case of failure
  });

  it('should do nothing when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.a('promise'); // Ensure the function returns a promise
    result.then(() => {
      done(new Error('Promise should not resolve when success is false'));
    });

    // Since the promise does nothing, the test passes after a delay
    setTimeout(() => done(), 50); // Allow enough time to confirm no resolution
  });
});
