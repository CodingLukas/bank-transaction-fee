'use strict';

const FileService = require('./Services/FileService');

class Main {

    constructor() {
        this.startProgram();
    }

    startProgram() {
        FileService.loadFile(Main.getFileName());
    }

    getFileName(){
        return process.argv.slice(2)[0];
    }

}

new Main();