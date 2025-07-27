const express = require('express');

const  UserController  = require('../../controllers/user-controller');
const { validateUserSignup } = require('../../middlewares/index');


const router = express.Router();


router.post('/signup', 
    validateUserSignup,
    UserController.create
);

router.post('/signin',
    validateUserSignup,
    UserController.signIn
);

module.exports = router;


