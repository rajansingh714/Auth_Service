
const validateUserSignup = async (req, res, next) => {

    if(!req.body.email || !req.body.password) {
        return req.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Email or password missing in the signUp request'
        });
    }

    next();
}

module.exports = {
    validateUserSignup
}