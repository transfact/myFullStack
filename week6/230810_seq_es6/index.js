import express from 'express'
const app = express()
const PORT = 8080;

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/static",express.static(__dirname+"/static"))

//라우터 가져오기
// index를 생략가능하다(코드에서는 생략안할것임)
import router from './routes/rUser.js'
// const router =require("./routes/rUser")
//const visitorRouter = require("/visitor")
//app.use("/router/visitor",visitorRouter)
app.use(router)

app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/user`);
})