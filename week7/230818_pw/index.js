const express = require('express')
const app = express()
const PORT = 8080;

require('dotenv').config()

app.set('view engine','ejs')
app.set("views","./views")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const db = require('./models');
//router
const userRouter = require('./router/index.js');
app.use('/', userRouter);

//404
app.use('*', (req, res) => {
    res.render('404');
});

let hash=''
app.post('/hash',(req,res)=>{
    const {pw} =req.body
    hash= createdHashedPassword(pw)
    res.json({hash})
})
app.post('/pbkd',(req,res)=>{
    const {pw} =req.body
    pbkd= createPbkd2Password(pw)
    console.log(pbkd)
    res.json({'pbkd': pbkd.toString('base64')})
})
app.post('/bc_hash',(req,res)=>{
    const {pw} =req.body
    hash= bcryptPassword(pw)
    res.json({hash})
})
app.post('/verify',(req,res)=>{
    const {pw} =req.body
    result= verifyPassword(pw,salt,pbkd)
    res.json(result)
})
app.post('/bc_verify',(req,res)=>{
    const {pw} =req.body
    result= comparePassword(pw,hash)
    res.json(result)
})

app.post('/encode',(req,res)=>{
    const {pw} =req.body
    pbkd= cipherEncrypt(pw)
    console.log(pbkd)
    res.json({'pbkd': pbkd.toString('base64')})
})

app.post('/decode',(req,res)=>{
    const data= decipher(pbkd)
    console.log(data)
    res.json({data})
})
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

//암호화
//단방향
//해시
const crypto = require('crypto');
const { hasSubscribers } = require('diagnostics_channel');
const createdHashedPassword = (password)=>{
    //createHash(알고리즘).update(패스워드).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest("base64")
}
//pbkdf2 함수
const salt= crypto.randomBytes(16).toString('base64')
//반복횟수
const iter = 100
//생성할 key의 길이
const keylen = 64
//해시 알고리즘
const digest=process.env.SHA
var pbkd = ''
const createPbkd2Password =  (password) =>{
    return crypto.pbkdf2Sync(password,salt,iter,keylen,digest)
    //반환되는 값은 buffer
}

//검증 패스워드
const verifyPassword = (password,salt,dbPassword)=>{
    const compare = crypto.pbkdf2Sync(password,salt,iter,keylen,digest).toString('base64')
    if (compare === dbPassword.toString("base64")){
        return true
    }else {
        return false
    }
}

// ㅇㅇㅇㅇ, salt=1234 => cccc

//양방향 
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32) 
const iv=crypto.randomBytes(16) //데이터블록 암호화시에 보안성 ++

const cipherEncrypt = (word)=>{
    const cipher = crypto.createCipheriv(algorithm,key,iv)///암호화 객체 생성
    let encryptedData = cipher.update(word,'utf-8','base64') //암호화 데이터 처리
    encryptedData+=cipher.final('base64')
    return encryptedData
}

//복호화
const decipher = (encryptData) =>{
    const decode = crypto.createDecipheriv(algorithm,key,iv)
    let decodeData = decode.update(encryptData,'base64','utf-8') //암호화 데이터 처리
    decodeData+=decode.final('utf-8')
    console.log(decodeData)
    return decodeData
}
// bcrypt(단방향)
const bcrypt =require("bcrypt")
const bc_salt=9
//암호화
const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password,bc_salt)
}

//비교
const comparePassword = (password,dbPassword)=>{
    return bcrypt.compareSync(password,dbPassword)
}