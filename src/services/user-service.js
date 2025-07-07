const  UserRepository  = require('../repository/user-repository');

class UserSerive {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const result = await this.userRepository.createUser(data);
            return result;
        } catch (error) {
            console.log('somwthing went wrong in serice layer');
            throw(error);      
        }
    }
}


module.exports = UserSerive;

