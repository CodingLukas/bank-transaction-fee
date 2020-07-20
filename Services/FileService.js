import * as fs from 'fs';
import {getTransactionService} from '../Services/TransactionService.js';
import {getUserService} from '../Services/UserService.js';


class FileService {

    loadFile(fileName) {
        if (fileName !== undefined) {
            fs.readFile(fileName, (err, data) => {
                if (err) throw err;
                let transactions = JSON.parse(data);
                transactions.forEach(transaction => {
                    const userId = transaction.user_id;
                    const user = getUserService().getUser(userId);
                    getTransactionService().executeTransaction(user, transaction);
                });
            });
        } else
            console.log('File argument not provided.');
    }

}

const instance = new FileService();
export const getFileService = () => instance;
