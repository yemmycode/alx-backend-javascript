import chai from "chai";
import sinon from "sinon";
import { expect } from "chai";
import sendPaymentRequestToApi from "../3-payment.js";

const { spy } = sinon;

describe("sendPaymentRequestToApi", () => {
  it("should call console.log with the correct message", () => {
    const consoleSpy = spy(console, "log");
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
    consoleSpy.restore();
  });
});
