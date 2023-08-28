const express = require("express")
const memberlist = require("../model/filelist")
const controller = require('../controller/cUsers')
const router = express.Router()
//get
router.get("/",controller.home)
//쿠키 설정하기
const cookieConfig = {
    httpOnly : true,
    maxAge : 60 * 1000 ,//10분 ,
}

router.get("/login",controller.login)


router.post('/login',controller.loginCheck)  
router.get("/members",controller.members)
router.get('/logOut',controller.logOut);

module.exports=router