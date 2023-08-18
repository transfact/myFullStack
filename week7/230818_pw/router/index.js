const express = require('express');
const router = express.Router();
const controller = require('../controller/cUser');

router.get('/', controller.index);

//로그인페이지로
router.get('/toLogIn', controller.toLogIn);
//로그인기능
router.post('/LogIn', controller.LogIn);
//회원가입페이지로
router.get('/toSignUp', controller.toSignUp);
//회원가입기능
router.post('/SignUp', controller.SignUp);

module.exports = router;
