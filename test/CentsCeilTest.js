import * as assert from 'assert';
import {Fee} from '../Models/Fee.js';
const Fees = new Fee();

describe('Cents ceiling', () => {
    it('roundUp method given 0.232 amount shall return 0.24', () => {
        assert.strictEqual(Fees.roundUp(0.232), '0.24');
    });
    it('roundUp method given 0.230 amount shall return 0.23', () => {
        assert.strictEqual(Fees.roundUp(0.230), '0.23');
    });
    it('roundUp method given 0.2302 amount shall return 0.24', () => {
        assert.strictEqual(Fees.roundUp(0.2302), '0.24');
    });
    it('roundUp method given 0.22 amount shall return 0.22', () => {
        assert.strictEqual(Fees.roundUp(0.22), '0.22');
    });
    it('roundUp method given 0.01 amount shall return 0.01', () => {
        assert.strictEqual(Fees.roundUp(0.01), '0.01');
    });
    it('roundUp method given 0.013 amount shall return 0.02', () => {
        assert.strictEqual(Fees.roundUp(0.013), '0.02');
    });
    it('roundUp method given 0.0103 amount shall return 0.02', () => {
        assert.strictEqual(Fees.roundUp(0.0103), '0.02');
    });
});
