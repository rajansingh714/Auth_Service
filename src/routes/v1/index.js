const express = require('express');

const  UserController  = require('../../controllers/user-controller');
const  validateUser    = require('../../middlewares/auth-request-validator');


const router = express.Router();



router.post('/signup', 
    validateUser.validateUserSignup,
    UserController.create
);

router.post('/signin',
    validateUser.validateUserSignup,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);


router.get(
    '/isAdmin',
    validateUser.validateIsAdminRequest,
    UserController.isAdmin
);
module.exports = router;


