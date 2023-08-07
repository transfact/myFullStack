const express = require("express")
const router =express.Router()
const controller = require("../controller/cLogin")

router.get("/",controller.main)
router.post("/axiosLogin",controller.axiosLogin)
module.exports =router;