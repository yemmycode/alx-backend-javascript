import { expect } from "chai";
import sinon from "sinon";
import { sendPaymentRequestToApi } from "./3-payment.mjs";
import { Utils } from "./utils.mjs";

describe("sendPaymentRequestToApi", () => {
  let calculateNumberSpy;

  beforeEach(() => {
    // Spy on Utils.calculateNumber
    calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
  });

  afterEach(() => {
    // Restore the spy
    calculateNumberSpy.restore();
  });

  it("should call Utils.calculateNumber with 'SUM', 100, and 20", () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith("SUM", 100, 20)).to.be.true;
  });

  it("should log 'The total is: 120' to the console", () => {
    const consoleSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;

    consoleSpy.restore();
  });
});
