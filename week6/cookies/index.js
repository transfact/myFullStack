const express = require('express')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express()
const PORT = 8080;
const SECRET = "13141ggdagr342"
app.set("view engine","ejs")
app.set("views","./views")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

//암호화쿠키
app.use(cookieParser("modal"))

app.use(session({
    secret : "myLoginSession",
    secure : false,
    resave : false,
    saveUninitialized :true,
    cookie : {
        httpOnly : false,
        maxAge : 60 * 1000 * 10
    },
    }
))

const cookieConfig = {
    maxAge : 60 * 1000 * 10, //10분,
    signed : false
}

app.get("/",(req,res)=>{

    const auth = req.headers.authorization
    if(auth===undefined){
        res.render("login")
    }else{
        const token = auth.split(" ")
        console.log(token)
    }
})
const id = 'hi'
const pw = '0518'

app.post('/login',(req,res)=>{
    console.log(req.body)
    const {id,pw}= req.body

    if(req.body.id==id && req.body.pw ==pw ){
        console.log('here')
        const token = jwt.sign({id:id},SECRET,);
        res.send({result:true,token : token})
        //req.session.loginSucess =1

    }else{
        res.send({result:false})
        //req.session.loginSucess =0
    }
    // if( req.session.loginSucess==1){
    //     res.send({'loginSucess' : 1})
    // }else {
    //     res.send({'loginSucess' : 0})
    // }
})

app.post('/logOut',(req,res)=>{
    console.log(req.headers.authorization);
    const auth = req.headers.authorization
    const token = auth.split(" ")
    if(token[0]==='Bearer'){
        jwt.verify(token[1],SECRET,(err,result)=>{
            if (err){
                console.log(err)
                res.status(403).send({message : "검증 실패"})
            }
            console.log(result)
            res.send(result)
        })

    }else{
        res.send({"message" : "잘못된 인증방식입니다"})
    }
})



// app.get("/",(req,res)=>{
//     console.log(req.cookies)
//     if(req.cookies['modalclicked']==1){
//         console.log("모달창 X")
//     }else{
//         res.cookie("modalclicked","0",cookieConfig)
//         console.log("모달창 생성")

//     }
//     res.render("index")
// })

app.get("/destroy",(req,res)=>{
    res.clearCookie('modalclicked',{maxAge : -1})
    res.send("쿠키 초기화")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})