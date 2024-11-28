import sinon from 'sinon';
import Utils from './utils.js';  // Correct path for importing the module
import { expect } from 'chai';
import sendPaymentRequestToApi from './4-payment.js';  // Import the function you're testing

describe('sendPaymentRequestToApi', () => {
  it('uses the calculateNumber method of Utils and logs the correct total', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);  // Stub the method

    const spy = sinon.spy(console, 'log');  // Spy on console.log

    sendPaymentRequestToApi(100, 20);

    // Verify the stub is called with correct parameters
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log logged the correct message
    expect(spy.calledWith('The total is: 10')).to.be.true;

    // Restore stub and spy
    stub.restore();
    spy.restore();
  });
});

