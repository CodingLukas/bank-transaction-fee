const Fee = require('../Models/Fee');

class CashOutNaturalFee extends Fee {

    constructor() {
        super();
        this.limit = 1000;
        this.tax = 0.003;
    }

    calculateFee(TransactionService, user, transaction) {
        let amountToFee;
        if (user.amount <= this.limit)
            amountToFee = transaction.operation.amount - (this.limit - user.amount);
        else amountToFee = transaction.operation.amount;
        if (amountToFee < 0) amountToFee = 0;
        user.amount += transaction.operation.amount;

        let fee = amountToFee * this.tax;
        return this.roundUp(fee, 2);
    }

}

module.exports = new CashOutNaturalFee();