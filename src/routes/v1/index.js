const express = require('express');

const  UserController  = require('../../controller/user-controller');
const  { AuthRequestValidate }     = require('../../middlewares/index');
const { ValidateIsAdminRequest } = require('../../middlewares/auth-request-validator');


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

router.get(
    '/isAdmin',
    AuthRequestValidate.ValidateIsAdminRequest,
    UserController.isAdmin
);




module.exports = router;

