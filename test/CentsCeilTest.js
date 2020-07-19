const assert = require('chai').assert;
const Fee = new (require('../Models/Fee'));

describe('Cents ceiling', function () {
    it('roundUp method given 0.232 amount shall return 0.24', function () {
        assert.equal(Fee.roundUp(0.232), 0.24);
    });
    it('roundUp method given 0.230 amount shall return 0.23', function () {
        assert.equal(Fee.roundUp(0.230), 0.23);
    });
    it('roundUp method given 0.2302 amount shall return 0.24', function () {
        assert.equal(Fee.roundUp(0.2302), 0.24);
    });
    it('roundUp method given 0.22 amount shall return 0.22', function () {
        assert.equal(Fee.roundUp(0.22), 0.22);
    });
    it('roundUp method given 0.01 amount shall return 0.01', function () {
        assert.equal(Fee.roundUp(0.01), 0.01);
    });
    it('roundUp method given 0.013 amount shall return 0.02', function () {
        assert.equal(Fee.roundUp(0.013), 0.02);
    });
    it('roundUp method given 0.0103 amount shall return 0.02', function () {
        assert.equal(Fee.roundUp(0.0103), 0.02);
    });
});