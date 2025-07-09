const  UserSerive  = require('../services/user-service');


const userService = new UserSerive();


const create = async (req, res) => {
    try {
        const result = await userService.create({
            email: req.body.email,
            password: req.body.password
        });

        return res.status(201).json({
            success: true,
            message: 'successfulyy created is a new user',
            data: result,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}


const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            mesaage: 'successFully signIn',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}



module.exports = {
    create,
    signIn
    
}

