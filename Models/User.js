module.exports = class User {

    constructor(id) {
       this.id = id;
       this.transactions = {};
       this.amount = 0;
       this.lastTransactionDate;
    }

    getId(){
        return this.id;
    }

};