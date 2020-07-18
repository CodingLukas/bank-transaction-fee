const Fee = require('../Models/Fee');

class CashInFee extends Fee {

    calculateFee(user, transaction){
        let fee = transaction.operation.amount * 0.003;
        if(fee < 0.50) fee = 0.50;
        return this.roundUp(fee,2);
    }

}

module.exports = new CashInFee();