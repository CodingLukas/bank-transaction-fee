const TransactionFactory = require('../Models/Transaction');
const CashInFee = require('../Models/CashInFee');
const CashOutLegalFee = require('../Models/CashOutLegalFee');
const CashOutNaturalFee = require('../Models/CashOutNaturalFee');
var moment = require('moment');

class TransactionService {

    executeTransaction(user, args) {
        const transaction = this.makeTransaction(args);
        if (transaction.type === 'cash_in') this.cashIn(transaction.getAmount());
        else {
            this.updateLimits(user, transaction);
            this.cashOut(user, transaction);
            user.amount += transaction.getAmount();
        }
    }

    makeTransaction(args) {
        return new TransactionFactory(args);
    }

    cashIn(amount) {
        const fee = CashInFee.calculateFee(amount);
        console.log(fee);
    }

    cashOut(user, transaction) {
        let fee;
        if (transaction.user_type === 'juridical')
            fee = CashOutLegalFee.calculateFee(transaction.getAmount());
        else
            fee = CashOutNaturalFee.calculateFee(transaction.getAmount(), user.amount);
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

const instance = new TransactionService();

module.exports = instance;