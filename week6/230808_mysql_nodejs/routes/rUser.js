const express = require("express")
const controller = require("../controller/cUser");
const router = express.Router()
// router.get('/',controller.main)


//첫 홈페이지
router.get("/user",controller.main);
//로그인창으로
router.get("/user/signin",controller.toLogIn);
// //로그인 확인 
router.post("/user/signin",controller.requestLogIn);

//회원가입 창으로
router.get("/user/signup",controller.toSignUp);
// //회원가입 제출
router.post("/user/signup",controller.requestSignUp);

// //로그인 이후에 프로필페이지 성공/실패
// //성공시에는 profile페이지, 아니면 뒤로가기
router.post("/user/profile",controller.toProfile);


// //로그인 이후에 프로필페이지 성공/실패
// //성공시에는 profile페이지, 아니면 뒤로가기

// //로그인 성공시 수정버튼으로 수정
router.patch("/user/edit",controller.requestEdit);
// //로그인 성공시 페이지 버튼에서 탈퇴버튼
router.delete("/user/delete",controller.requestDel);

module.exports = router;