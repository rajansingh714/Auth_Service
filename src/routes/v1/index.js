const express= require('express');

const {AuthRequestValidator}= require('../../middlwares/index')
const UserController= require('../../controller/user-controller');
const router= express.Router();


router.post(
    '/signup',AuthRequestValidator.validateUserAuth,
    UserController.create
    );
router.post(
    '/signin',AuthRequestValidator.validateUserAuth,
    UserController.signIn
    );
module.exports= router;
