const express = require("express")
const app =express();
const PORT = 8080;

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//라우터 가져오기
// index를 생략가능하다(코드에서는 생략안할것임)
const router =require("./routes/index.js")
app.use(router)

//example)
//const userRouter =require("./routes/user");
//app.use("/user/",userRouter)

// *은 맨마지막에 쓰자(아니면 * 이 먼저 실행되면서...)
// app.get 대신 use써서, post,delete 에도 대응할 수 있게 하자!

app.use("*",(req,res)=>{
    res.render("404")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})