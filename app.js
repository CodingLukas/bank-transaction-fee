import {getFileService} from './Services/FileService.js';

class Main {

    constructor() {
        this.startProgram();
    }

    startProgram() {
        getFileService().loadFile(this.getFileName());
    }

    getFileName(){
        return process.argv.slice(2)[0];
    }

}

new Main();
