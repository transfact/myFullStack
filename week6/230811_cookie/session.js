const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")

const app = express()
const PORT = 8080;

app.set("view engine","ejs")
// app.set("views","./views")

app.use(express.json())
//세션 옵션 개체 http : httpOnly를 해야 사용자가 쿠키를 조작할 수 없음
//secure : 값을 true로 하면 https에서만 세션을 주고 받는다.
//secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명(세션 발급을 위한 키,중요)
//resave 세션에 수정사항이 생기지 않아도 매 요청마다 세션을 저장하는지? (false 권장)
//saveUninitialized : 세션에 저장할 내역이 없어도 처음부터 세션을 생성할 시 생성할지 설정 (보통 TRUE) 
//cookie
app.use(session({
    secret : "mySessionSecret",
    secure : false,
    resave : false,
    saveUninitialized :true,
    cookie : {
        httpOnly : false,
        maxAge : 60 * 1000 * 2
    },
    }
))
//개발자 상태에서 새로고침 우클릭하면 강력새로고침 가능
app.get("/",(req,res)=>{
    req.session.name ='홍길동'
    res.render("세션 설정완료")
})
app.get('/name',(req,res)=>{
    console.log(req.session.name)
    res.send({id : req.sessionID , name : req.session.name})
})

app.get('/destroy',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            return ; 
        }
        res.redirect("/name")
    })
})

app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`)
})