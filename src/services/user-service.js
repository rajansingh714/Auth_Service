const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const  UserRespository  = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');

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

    checkPassword(userPlanePassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userPlanePassword, encryptedPassword);
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }
}


module.exports = UserService;

