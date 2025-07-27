const  UserRespository  = require('../repository/user-repository');



class UserService {

    constructor() {
        this.userRepository = new UserRespository();
    }

    async create(data) {
        try {
            const result = await this.userRepository.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }
}

module.exports = UserService;

