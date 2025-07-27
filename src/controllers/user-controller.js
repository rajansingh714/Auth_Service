const  UserService  = require('../services/user-service');


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
        return res.status(500).json({
            success: false,
            message: 'successFully not createa user',
            data: {},
            err: error
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

module.exports = {
    create,
    signIn
}