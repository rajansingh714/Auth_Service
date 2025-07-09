const express = require('express');

const  UserController  = require('../../controller/user-controller');
const { AuthRequestValidate }    = require('../../middlewares/index');


const router = express.Router();


console.log(typeof(AuthRequestValidate));


router.post(
    '/signup',
    AuthRequestValidate.ValidateUserAuth, 
    UserController.create);
router.post(
    '/signin',
    AuthRequestValidate.ValidateUserAuth, 
    UserController.signIn);


module.exports = router;

