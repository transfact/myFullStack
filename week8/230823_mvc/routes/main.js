const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);


//전체목록 보기
router.get("/comments", controller.comments);

//상세보기
router.get("/comment/:id",controller.comment)

module.exports = router;
