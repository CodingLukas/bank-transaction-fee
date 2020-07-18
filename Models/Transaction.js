module.exports = class Transaction {

    constructor(object) {
        this.date = object.date;
        this.user_id = object.user_id;
        this.user_type = object.user_type;
        this.type = object.type;
        this.operation = object.operation;
    }

};