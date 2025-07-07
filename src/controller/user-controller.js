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
            data: {
                id: result.id,
                email: result.email,
                password: result.password
            },
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
}

