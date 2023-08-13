const express = require('express')
const app = express()
const PORT =8080;
const db= require("./models")

//view engine
app.set("view engine","ejs")
//default값임
app.set("views","./views")
//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const studentRouter = require("./router/student.js")
app.use("/student",studentRouter)

app.get("/",(req,res)=>{
    res.render('index')
})



db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`http://localhost:${PORT}`)
    })
})

