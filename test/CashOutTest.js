const assert = require('chai').assert;
const CashOutLegalFee = require('../Models/CashOutLegalFee');
const CashOutNaturalFee = require('../Models/CashOutNaturalFee');

describe('CashOut Transaction Fee Calculation', function () {
    describe('Legal user type', function () {
        it('calculateFee method given 300 amount to withdraw shall return 0.90', function () {
            assert.equal(CashOutLegalFee.calculateFee(300), 0.90);
        });
        it('calculateFee method given 1 amount to withdraw shall return 0.50', function () {
            assert.equal(CashOutLegalFee.calculateFee(1), 0.50);
        });
    });
    describe('Natural user type', function () {
        it('calculateFee method given 30000 amount to withdraw and 0 total user withdrawn amount shall return 87.00', function () {
            assert.equal(CashOutNaturalFee.calculateFee(30000, 0), 87.00);
        });
        it('calculateFee method given 1000 amount to withdraw and 30000 total user withdrawn amount shall return 3.00', function () {
            assert.equal(CashOutNaturalFee.calculateFee(1000, 30000), 3.00);
        });
        it('calculateFee method given 100 amount to withdraw and 31000 total user withdrawn amount shall return 0.30', function () {
            assert.equal(CashOutNaturalFee.calculateFee(100, 31000), 0.3);
        });
        it('calculateFee method given 1000 amount and 0 user withdrawn amount shall return 0.00', function () {
            assert.equal(CashOutNaturalFee.calculateFee(1000, 0), 0.00);
        });
    });
});
