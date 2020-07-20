import {Transaction} from '../Models/Transaction.js';
import {getCashInFeeInstance} from '../Models/CashInFee.js';
import {getCashOutLegalFee} from '../Models/CashOutLegalFee.js';
import {getCashOutNaturalFee} from '../Models/CashOutNaturalFee.js';
import moment from 'moment'

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
        return new Transaction(args);
    }

    cashIn(amount) {
        const fee = getCashInFeeInstance().calculateFee(amount);
        console.log(fee);
    }

    cashOut(user, transaction) {
        let fee;
        if (transaction.user_type === 'juridical')
            fee = getCashOutLegalFee().calculateFee(transaction.getAmount());
        else
            fee = getCashOutNaturalFee().calculateFee(transaction.getAmount(), user.amount);
        console.log(fee);
    }

    isSameWeekTransaction(user, transaction) {
        const last = moment(user.lastTransactionDate);
        const current = moment(transaction.date);
        return user.lastTransactionDate === undefined || last.isoWeek() === current.isoWeek();
    }

    updateLimits(user, transaction) {
        if (!this.isSameWeekTransaction(user, transaction))
            user.amount = 0;
        user.lastTransactionDate = transaction.date;
    }

}

const instance = new TransactionService();
export const getTransactionService = () => instance;
