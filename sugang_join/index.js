const express = require('express')
const session = require("express-session")
const jwt = require('jsonwebtoken')
const secret = "qwerreq123321"
const app = express()
const PORT =8080;
const db= require("./models")

//view engine
app.set("view engine","ejs")
//default값임
app.set("views",'./views')

//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/static',express.static(__dirname+'/static'))

//세션

let maxage=60*1000
const sessionOpt = {
    httpOnly : true,
    secret : "0327",
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : 60 * 1000 * 10
    }
}

app.use(session(sessionOpt))

app.get("/",(req,res)=>{
    res.render('index')
})

const defaultRouter = require("./router/default.js");
app.use("/",defaultRouter)

db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`http://localhost:${PORT}`)
    })
})

