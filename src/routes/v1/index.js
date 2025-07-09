const express = require('express');

const  UserController  = require('../../controller/user-controller');
const  { AuthRequestValidate }     = require('../../middlewares/index');


const router = express.Router();

router.post(
    '/signup',
     AuthRequestValidate.ValidateUserAuth, 
    UserController.create
);

router.post(
    '/signin',
    AuthRequestValidate.ValidateUserAuth, 
    UserController.signIn
);

router.get(
    '/isAuthentic',
    UserController.isAuthenticated
);


module.exports = router;

