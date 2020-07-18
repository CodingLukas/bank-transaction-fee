const Fee = require('../Models/Fee');

class CashInFee extends Fee {

    calculateFee(user, transaction){
        let fee = transaction.operation.amount * 0.0003;
        if(fee > 5) fee = 5;
        return fee;
    }

}

module.exports = new CashInFee();