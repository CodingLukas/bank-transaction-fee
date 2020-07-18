module.exports = class User {

    constructor(id) {
       this.id = id;
       this.transactions = {};
    }

    getId(){
        return this.id;
    }

};