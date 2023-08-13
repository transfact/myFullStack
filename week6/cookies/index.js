const express = require('express')
const cookieParser = require("cookie-parser")
// const session = require("express-session")

const app = express()
const PORT = 8080;

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

//암호화쿠키
app.use(cookieParser("modal"))

// app.use(session({
//     secret : "myLoginSession",
//     secure : false,
//     resave : false,
//     saveUninitialized :true,
//     cookie : {
//         httpOnly : false,
//         maxAge : 60 * 1000 * 10
//     },
//     }
// ))

const cookieConfig = {
    maxAge : 60 * 1000 * 10, //10분,
    signed : false
}

// app.get("/",(req,res)=>{
//     res.render("login")
// })

// app.get('/login',(req,res)=>{
//     req.session.name ='gichun'
//     res.send("login")
// })



app.get("/",(req,res)=>{
    console.log(req.cookies)
    if(req.cookies['modalclicked']==1){
        console.log("모달창 X")
    }else{
        res.cookie("modalclicked","0",cookieConfig)
        console.log("모달창 생성")

    }
    res.render("index")
})

app.get("/destroy",(req,res)=>{
    res.clearCookie('modalclicked',{maxAge : -1})
    res.send("쿠키 초기화")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})