const express = require('express');

const  UserController  = require('../../controllers/user-controller');
const  { validateUserSignup }  = require('../../middlewares/auth-request-validator');


const router = express.Router();


router.post('/signup', 
    validateUserSignup,
    UserController.create
);

router.post('/signin',
    validateUserSignup,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);


module.exports = router;


