const jwt= require('jsonwebtoken');

const UserRepository = require('../repository/user-repository');
const {JWT_KEY}= require('../config/serverConfig');
const bcrypt = require('bcrypt');
class UserService{
    constructor(){
        this.userRepository= new UserRepository();
    }

    async create(data){
        try{
            const user= await this.userRepository.create(data);
            return user;
        }
        catch(error){
            console.log("something went wrong in the service layer");
            throw error;
        }
    }
    createToken(user){
        try{
            const result= jwt.sign(user,JWT_KEY,{expiresIn: '1hr'});
            return result;
        }
        catch(error){
            console.log("something went wrong on respository layer");
            throw error;
        }
    }

    verifyToken(token){
        try{
            const response= jwt.verify(token,JWT_KEY);
            return response;
        }
        catch(error){
            console.log("something went wrong in token creation");
            throw error;
        }
    }
    checkPassword(userInputPlainPassword,encryptedPasword){
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPasword);
        }
        catch(error){
            console.log("something went wrong in checkPassword");
            throw error;
        }
    }
    async signIn(email,PlainPassword){
        try{
            // step 1-> fetch the user using the email
            const user= await this.userRepository.getByEmail(email);
            // step 2-> compare incoming plain password with stores encrypted password
            const passwordsMatch = this.checkPassword(PlainPassword, user.password);

            if(!passwordsMatch){
                console.log("password does not match");
                throw {error: 'Incorrect Password'};
            }
            // step 3 -> if passwords match then create a token and send it to the user
            const newJWT= this.createToken({email: user.email, id: user.id});
            return newJWT;
        }
        catch(error){
            console.log("something went wrong in signin");
            throw {error: "Incorrect Password"};
        }
    }
}

module.exports= UserService;