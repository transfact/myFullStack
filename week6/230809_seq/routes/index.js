const express = require("express")
const controller = require("../controller/cVisitor");
const router = express.Router()

//

router.get("/",controller.main);


router.get("/visitor",controller.getVisitors);
router.get("/visitor/get",controller.getVisitor);
router.post("/visitor/write",controller.postVisitor);
router.patch("/visitor/edit",controller.patchVistor);
router.delete('/visitor/delete/:id',controller.deleteVisitor);
module.exports = router;