

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

module.exports = {
    ValidateUserAuth,
}