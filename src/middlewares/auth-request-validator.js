

const ValidateUserAuth = async (req, res, next) => {
        if(!req.body.email || !req.body.password) {
            return res.status(200).json({
                success: false,
                message: 'something went wrong ',
                data: {},
                err: 'Email or Password is misssing in the signUp request'
            });
        }
        next();
}

const ValidateIsAdminRequest = async(req, res, next) => {
    if(!req.body.id) {
        return res.status(400).json({
            success: false,
            message: 'user Id is not Given',
            err: {}
        });
    }
    next();
}

module.exports = {
    ValidateUserAuth,
    ValidateIsAdminRequest
}