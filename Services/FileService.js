const fs = require('fs');

class FileService {

    constructor() {

    }

    loadFile(fileName) {
        if (fileName !== undefined) {
            fs.readFile(fileName, (err, data) => {
                if (err) throw err;
                let transactions = JSON.parse(data);
                transactions.forEach(transaction => console.log(transaction));
            });
        } else
            console.log('File argument not provided.');
    }

}

module.exports = new FileService();