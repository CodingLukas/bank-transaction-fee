import * as assert from 'assert';
import {getCashInFeeInstance} from '../Models/CashInFee.js';

describe('CashIn Transaction Fee Calculation', () => {
    it('calculateFee method given 200 amount to deposit shall return 0.06', () => {
        assert.strictEqual(getCashInFeeInstance().calculateFee(200), '0.06');
    });
    it('calculateFee method given 1000000 amount to deposit shall return 5.00', () => {
        assert.strictEqual(getCashInFeeInstance().calculateFee(1000000), '5.00');
    });
});
