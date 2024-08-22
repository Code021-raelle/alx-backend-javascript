const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments and display the result', () => {
        // Create a spy for Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the correct arguments
        sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

        // Restore the spy after use
        calculateNumberSpy.restore();
    });
});
