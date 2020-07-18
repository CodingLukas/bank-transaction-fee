const UserFactory = require('../Models/User');

class UserService {

    constructor() {
        this.users = [];
    }

    existsUser(id) {
        return this.getUser(id) !== undefined;
    }

    getUser(id) {
        return this.users.find(user => user.getId() === id);
    }

    addUser(id) {
        this.users.push(new UserFactory(id));
    }

}

module.exports = new UserService();