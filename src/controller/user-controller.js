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
         const result = await userService.signIn(req.body.email, req.body.password);
         return res.status(200).json({
            success: true,
            data: result,
            message: 'successFully signIn',
            err: {}
         });
        } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'SuccessFully not signIn',
            data: {},
            err: error
        }); 
    }
}


const isAuthenticated = async (req, res) => {
        try {
            const token = req.headers['x-access-token'];
            const response = await userService.isAuthenticate(token);
            return res.status(200).json({
                success: true,
                message: 'SuccessFulyy authenticated',
                data: response,
                err: {},
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succcess: false,
                message: 'SuccessFully not Authentic ',
                data: {},
                err: error
            });
        }
}

const isAdmin = async (req, res) => {
        try {
            const response  = await userService.isAdmin(req.body.id);
            return res.status(200).json({
                success: true,
                data: response,
                message: 'SuccessFully fetched whether user is admin or not',
                err: {}
            });
            
        } catch (error) {
           console.log(error);
            return res.status(500).json({
                succcess: false,
                message: 'something went wrong in Controller ',
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

