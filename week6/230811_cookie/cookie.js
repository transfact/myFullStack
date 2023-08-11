const express = require('express')
const cookieParser = require("cookie-parser")

const app = express()
const PORT = 8080;

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.json())
app.use(express.urlencoded({urlencoded : true}))
//cookie (일반)
// app.use(cookieParser())

//암호화쿠키
app.use(cookieParser("rand"))

//cookie옵션개체
const cookieConfig  = {
    //httpOnly 웹서버를 통해서만 쿠키에 접근 가능 (document.cookie 불가)
    //maxAge :쿠키의 수명 (ms단위)
    //expires : 만료날짜 GMT 시간 설정
    //path 해당 디렉토리와 하위 디렉토리에서만 경로 활성화, 웹브라우저는 해당하는 쿠키만 웹서버에 전송
    //보내고 싶은 쿠키만 보낼 수 있다. default : /
    //domain 쿠키가 전송될 도메인을 특정할 수 있따.
    //secure : 웹브라우저와 웹서버가 https 일경우면 가능
    //signed : 쿠키의 암호화결정 (req.signedCookies 객체에 들어있다고 함)
    httpOnly : true,
    maxAge : 60 * 1000, //10분
    signed : true,
}
app.get("/",(req,res)=>{
    res.render('index')
});


app.get("/setCookie",(req,res)=>{
    //쿠키이름, 쿠키값, 옵션객체
    res.cookie('cookieRun','초코맛쿠기',cookieConfig)
    res.send("setCookie")
})
app.get("/getCookie",(req,res)=>{
    res.send(req.signedCookies)
})
app.get("/clearCookie",(req,res)=>{
    res.clearCookie('cookieRun',{maxAge : -1})
    res.send('clearcookie')
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})