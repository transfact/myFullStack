const express =require ("express")
const cryto = require ("crypto")
const app =express()
const PORT = 8080
app.use(express.urlencoded({extended:true}))
app.use(express.json())
var pbkd_pw=''

//salt
const SALT = cryto.randomBytes(64).toString('base64')
//length
const LENGTH=1000
//KEY 
const KEY = 128
//algorithm
const ALGO = 'sha512'
app.post('/login',(req,res)=>{
    const {pw} = req.body

    // const new_pw =cryto.createHash('sha512').update(pw).digest("base64")
    //sync ->동기
    pbkd_pw = cryto.pbkdf2Sync(pw,SALT,LENGTH,KEY,ALGO).toString('base64')
    res.send(pbkd_pw)
})

app.post("/verify",(req,res)=>{
    const {pw} = req.body
    const compare = cryto.pbkdf2Sync(pw,SALT,LENGTH,KEY,ALGO)
    console.log(compare)
    console.log('PBKD',pbkd_pw)
    const result = cryto.timingSafeEqual(compare,Buffer.from(pbkd_pw))
    res.send(result)

})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})