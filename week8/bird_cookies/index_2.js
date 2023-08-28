const express = require ('express')
const session =require("express-session")
const cookie =require("cookie-parser")

const app = express()
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie())
app.use(session({
    secret : "mySession", //서명
    secure : false, // true면 https 에서만
    resave : false, // true면 수정사항이 생기지 않아도 매 요청마다 세션을 저장한다 (false 권장)
    saveUninitialized :true, //세션에 저장할 내역이 없어도 처음부터 세션을 생성할 시 생성할지 설정 (보통 TRUE) 
    //쿠키
    cookie : {
        httpOnly : false,
        maxAge : 60 * 1000 * 1
    }, 
    }
))

// const router = require("./router/main")
// app.use("/",router)

app.get("/",(req,res)=>{
    // console.log(req.cookies)
    // if(!req.cookies.login){
    //     res.send("<script>alert('로그인해주세요');location.href='/';<script>");
    // }
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/members",(req,res)=>{
    res.render("members")
})

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});