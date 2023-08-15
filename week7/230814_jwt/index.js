const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const PORT = 8080;
const SECRET = "13141ggdagr342"

app.set('view engine','ejs')
app.set("views","./views")
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/login",(req,res)=>{
    const {id,pw}= req.body
    const token = jwt.sign({id},SECRET,);
    res.send({result : true,token})
})

app.post('/verify',(req,res)=>{
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

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})