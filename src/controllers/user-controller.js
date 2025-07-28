const  UserService  = require('../services/user-service');
const AppError = require('../utils/error-handler');

const userService = new UserService();


const create = async (req, res) => {
    try {
        const result = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(200).json({
            success: true,
            data: result,
            message: 'successFully create a new user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            err: error.explanation
        });
    }
}

const  signIn = async (req, res) => {
    try {
        const result = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: result,
            message: 'successFully singn In',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'user not successFully not signIn',
            data: {},
            err: error
        });
    }
}


const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'user is authenticated and token is valid'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'user not successFully not signIn',
            data: {},
            err: error
        });
    }
}


const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: 'SuccessFully user is fetched it is Admin or not',
            err: {}
        });
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            success: false,
            message: 'user is not admin',
            data: {},
            err: error
        });
    }
}
module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
}