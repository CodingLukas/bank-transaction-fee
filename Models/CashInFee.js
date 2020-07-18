const Fee = require('../Models/Fee');

class CashInFee extends Fee {

    calculateFee(user, transaction){
        let fee = transaction.operation.amount * 0.0003;
        if(fee > 5) fee = 5.00;
        return this.roundUp(fee,2);
    }

}

module.exports = new CashInFee();