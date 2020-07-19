const TransactionFactory = require('../Models/Transaction');
const CashInFee = require('../Models/CashInFee');
const CashInLegalFee = require('../Models/CashOutLegalFee');
const CashInNaturalFee = require('../Models/CashOutNaturalFee');
var moment = require('moment');

class TransactionService {

    executeTransaction(user, args) {
        const transaction = this.makeTransaction(args);
        if (transaction.type === 'cash_in') this.cashIn(user, transaction);
        else {
            this.updateLimits(user, transaction);
            this.cashOut(user, transaction);
        }
    }

    makeTransaction(args) {
        return new TransactionFactory(args);
    }

    cashIn(user, transaction) {
        const fee = CashInFee.calculateFee(user, transaction);
        console.log(fee);
    }

    cashOut(user, transaction) {
        let fee;
        if (transaction.user_type === 'juridical')
            fee = CashInLegalFee.calculateFee(user, transaction);
        else
            fee = CashInNaturalFee.calculateFee(this, user, transaction);

        console.log(fee);
    }

    isSameWeekTransaction(user, transaction) {
        var last = moment(user.lastTransactionDate);
        var current = moment(transaction.date);
        return user.lastTransactionDate === undefined || last.isoWeek() === current.isoWeek();
    }

    updateLimits(user, transaction) {
        if (!this.isSameWeekTransaction(user, transaction))
            user.amount = 0;
        user.lastTransactionDate = transaction.date;
    }

}

module.exports = new TransactionService();