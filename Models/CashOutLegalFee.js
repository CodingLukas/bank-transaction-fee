const Fee = require('../Models/Fee');

class CashOutLegalFee extends Fee {

    constructor() {
        super();
        this.minFee = 0.50;
        this.tax = 0.003;
    }

    calculateFee(amount) {
        let fee = amount * this.tax;
        if (fee < this.minFee) fee = this.minFee;
        return this.roundUp(fee);
    }

}

const instance = new CashOutLegalFee();

module.exports = instance;