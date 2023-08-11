const express = require('express')
const router =express()
const controller =require("../controller/Cstudent.js") 

router.get("/",controller.main)

module.exports =router