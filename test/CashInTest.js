const assert = require('chai').assert;
const CashInFee = require('../Models/CashInFee');

describe('CashIn Transaction Fee Calculation', function () {
    it('calculateFee method given 200 amount to deposit shall return 0.06', function () {
        assert.equal(CashInFee.calculateFee(200), 0.06);
    });
    it('calculateFee method given 1000000 amount to deposit shall return 5.00', function () {
        assert.equal(CashInFee.calculateFee(1000000), 5.00);
    });
});