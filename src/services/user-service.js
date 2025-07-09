const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_KEY } = require('../config/serverConfig');
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

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '2days'} );
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }


    verfifyToke(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log('something went wrong in service layer', error);
            throw(error);
        }
    }


    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compare(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }

    async signIn(email, plainPassword) {
        try {
             // step 1--> fetch the user using email
            const user = await this.userRepository.getByEmail(email);
            // step 2--> compare incoming plain password with stores encrypted password
            const passwordMatch = await this.checkPassword(plainPassword, user.password);
            
            if(!passwordMatch) {
                console.log('Password does not match');
                throw {error: 'Incorrect password'}
            }

            // step 3--> if password match create token and send it to the user
            const newJWt = this.createToken({email: user.email, id: user.id });
            return newJWt;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw (error);
            
        }
    }

}


module.exports = UserSerive;

