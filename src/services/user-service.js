const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const  UserRepository  = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
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

    async signIn(email, plainPassword) {
        try {
            // step 1 --> fetch the user using the email
            const user = await this.userRepository.getByEmail(email);
            // step 2 --> comparing incoming plainPassword with encrypted password
            const passwordMatch =  this.checkPassword(plainPassword, user.password);

            if(!passwordMatch) {
                console.log("Password doesn't match ");
                throw {error: 'Incorrect Password'}
            }

            // step 3 --> if password match then create a token and send it to the user
            const newJWT = this.createToken({ email: user.email, id: user.id });
            return newJWT;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }

    async isAthenticated(token) {
        try {
            const response =  this.verifyToken(token);
            if(!response) {
                throw {error: 'Invalid token'}
            }

            const user = this.userRepository.getById(response.id);
            if(!user) {
                throw {error: 'No user with the corresponding token exists'}
            }
            return user.id;
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

