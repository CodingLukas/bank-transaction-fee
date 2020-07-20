const Fee = require('../Models/Fee');

class CashOutNaturalFee extends Fee {

    constructor() {
        super();
        this.limit = 1000;
        this.tax = 0.003;
    }

    calculateFee(amount, userWithdrawnAmount) {
        let amountToFee;
        if (userWithdrawnAmount <= this.limit)
            amountToFee = amount - (this.limit - userWithdrawnAmount);
        else amountToFee = amount;
        if (amountToFee < 0) amountToFee = 0;

        let fee = amountToFee * this.tax;
        return this.roundUp(fee);
    }

}

const instance = new CashOutNaturalFee();

module.exports = instance;