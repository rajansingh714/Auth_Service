const  UserRespository  = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');

const jwt = require('jsonwebtoken');

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

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1d' });
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }

    verifyToken(token) {
        try {
            const result = jwt.verify(token, JWT_KEY);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }
}


module.exports = UserService;

