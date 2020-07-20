import {Fee} from '../Models/Fee.js';

class CashInFee extends Fee {

    constructor() {
        super();
        this.maxFee = 5.00;
        this.tax = 0.0003;
    }

    calculateFee(amount) {
        let fee = amount * this.tax;
        if (fee > this.maxFee) fee = this.maxFee;
        return this.roundUp(fee);
    }

}

const instance = new CashInFee();
export const getCashInFeeInstance = () => instance;
