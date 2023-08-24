const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//메인페이지
router.get('/', controller.main);

//회원가입 페이지로
router.get("/signUp",controller.signUp);
//회원가입 기능
router.post("/signUp",controller.requestSignUp); //db에 회원정보 저장

//로그인 페이지로
router.get("/signIn",controller.signIn);
//로그인 기능
router.post("/signIn",controller.requestSignIn); // 로그인 확인

router.get("/members",controller.findMember); // 여러 멤버 가져오기

router.patch("/member_patch",controller.changeMember); // 유저 데이터 수정
module.exports = router;
