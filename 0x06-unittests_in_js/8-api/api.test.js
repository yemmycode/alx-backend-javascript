const { expect } = require('chai'); // Importing 'expect' from chai first
const request = require('request'); // Importing 'request' next

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865'; // Defining the API URL

  // Defining the test case
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => { // Sending the GET request
      expect(res.statusCode).to.be.equal(200); // Verifying status code
      expect(body).to.be.equal('Welcome to the payment system'); // Verifying response body
      done(); // Signaling the completion of the test
    });
  });
});

