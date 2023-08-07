const express = require("express")
const router = express.Router();
//router에 controller를 import 
const controller = require("../controller/cComment")


//controller에서, main을 가져옴. (export main으로 설정)
router.get('/',controller.main)

router.get("/comments",controller.comments)

//GET              :id가 변수명처럼 들어감
router.get('/comment/:id',controller.comment)
//모듈의 exports =router로, 빼놓을 수 있다.
module.exports =router;