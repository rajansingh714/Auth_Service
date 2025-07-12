const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '5d'});
            return result;
        } catch (error) {
            console.log('somwthing went wrong in serice layer');
            throw(error);  
        }
    }
  
    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log('somwthing went wrong in serice layer');
            throw(error); 
        }
    }


    checkPassword(userPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userPlainPassword, encryptedPassword);
        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }


    async signIn(email, plainPassword)  {
        try {
            // step --> 1 fetch the email id from user
            const user = await this.userRepository.getByEmail(email);

            // stemp --> 2 compare the encrypted password and plain password
            const passwordMatch = await this.checkPassword(plainPassword, user.password);
            if(!passwordMatch) {
                console.log('password does not match');
                throw{error: 'Incorrect Password'}
            }
            
            // step 3 --> if password match them create a token and send to it user
            const newJWT = this.createToken({ email: user.email, id: user.id});
            return newJWT;

        } catch (error) {
            console.log('something went wrong in service layer');
            throw(error);
        }
    }


     isAuthenticate(token) {
        try {
            const response = this.verifyToken(token);
            if(!response) {
                throw{error: 'Invalid token'}
            }

            const user = this.userRepository.getById(response.id);
            if(!user) {
                throw{error: 'No user with corresponding token exists'}
            }
            return user.id;
        } catch (error) {
            console.log('something went wrong in serviceee layer');
            throw(error);
        }
    }
}


module.exports = UserSerive;

