import * as assert from 'assert';
import {getCashOutLegalFee} from '../Models/CashOutLegalFee.js';
import {getCashOutNaturalFee} from '../Models/CashOutNaturalFee.js';

describe('CashOut Transaction Fee Calculation', () => {
    describe('Legal user type', () => {
        it('calculateFee method given 300 amount to withdraw shall return 0.90', () => {
            assert.strictEqual(getCashOutLegalFee().calculateFee(300), '0.90');
        });
        it('calculateFee method given 1 amount to withdraw shall return 0.50', () => {
            assert.strictEqual(getCashOutLegalFee().calculateFee(1), '0.50');
        });
    });
    describe('Natural user type', () => {
        it('calculateFee method given 30000 amount to withdraw and 0 total user withdrawn amount shall return 87.00', () => {
            assert.strictEqual(getCashOutNaturalFee().calculateFee(30000, 0), '87.00');
        });
        it('calculateFee method given 1000 amount to withdraw and 30000 total user withdrawn amount shall return 3.00', () => {
            assert.strictEqual(getCashOutNaturalFee().calculateFee(1000, 30000), '3.00');
        });
        it('calculateFee method given 100 amount to withdraw and 31000 total user withdrawn amount shall return 0.30', () => {
            assert.strictEqual(getCashOutNaturalFee().calculateFee(100, 31000), '0.30');
        });
        it('calculateFee method given 1000 amount and 0 user withdrawn amount shall return 0.00', () => {
            assert.strictEqual(getCashOutNaturalFee().calculateFee(1000, 0), '0.00');
        });
    });
});
