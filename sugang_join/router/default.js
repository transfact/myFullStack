const express = require('express')
const router =express()
const controller =require("../controller/Cstudent.js") 
//home
router.get("/",controller.main)
//교수,class postman으로 만들기
router.post("/makeProfessor",controller.makeProfessor)
router.post("/makeClass",controller.makeClass)

//로그인 페이지로
router.get("/login",controller.login)
//로그인 요청
router.post("/login/reqSignIn",controller.loginRequest)
//수강신청 메인으로(수강바구니, 신청한 강좌 조회등 여러기능을 위해서 메인이 필요)
router.post("/user/to_sugang_main",controller.to_sugang_main)
//수강신청 메인 검증 verify_sugang
router.get("/user/verify_sugang",controller.verify_sugang)
//수강신청 화면으로(신청하고 넣는 곳)
router.post("/user/to_sugang_register",controller.to_sugang_register)

router.post("/student", controller.post_student)
router.post("/class", controller.post_class)

router.get("/student",controller.get_student)
router.get("/verify",controller.verify)
module.exports =router