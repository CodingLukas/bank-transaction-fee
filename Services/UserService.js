const UserFactory = require('../Models/User');

class UserService {

    constructor() {
        this.users = [];
    }

    existsUser(id) {
        return this.getUser(id) !== undefined;
    }

    getUser(id) {
        let user = this.users.find(user => user.id === id);
        if(user === undefined) user = this.createUser(id);
        return user;
    }

    createUser(id) {
        const user = new UserFactory(id);
        this.users.push(user);
        return user;
    }

}

module.exports = new UserService();