'use strict';

const FileService = require('./Services/FileService');

class Main {

    constructor() {
        this.startProgram();
    }

    startProgram() {
        let fileName = process.argv.slice(2)[0];
        FileService.loadFile(fileName);
    }

}

new Main();