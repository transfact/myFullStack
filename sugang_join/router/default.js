const express = require('express')
const router =express()
const controller =require("../controller/Cstudent.js") 

router.get("/",controller.main)

router.get("/login",controller.login)
router.post("/login/reqSignIn",controller.loginRequest)


router.post("/student", controller.post_student)
router.post("/class", controller.post_class)

router.get("/student",controller.get_student)

module.exports =router