const fs = require('fs');
const TransactionService = require('../Services/TransactionService');
const UserService = require('../Services/UserService');

class FileService {

    loadFile(fileName) {
        if (fileName !== undefined) {
            fs.readFile(fileName, (err, data) => {
                if (err) throw err;
                let transactions = JSON.parse(data);
                transactions.forEach(transaction => {
                    const userId = transaction.user_id;
                    const user = UserService.getUser(userId);
                    TransactionService.executeTransaction(user, transaction);
                });
            });
        } else
            console.log('File argument not provided.');
    }

}

const instance = new FileService();

module.exports = instance;