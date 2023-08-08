const express = require("express")
const app = express()
const PORT = 8080;

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//라우터 가져오기
// index를 생략가능하다(코드에서는 생략안할것임)
const router =require("./routes/rUser")
//const visitorRouter = require("/visitor")
//app.use("/router/visitor",visitorRouter)
app.use(router)

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/user`);
})