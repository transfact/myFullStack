//import
const express =require('express')
const app =express()
const PORT = 8080;

// body parser
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//view engine
app.set('view engine','ejs')
app.set('views','./views')

app.get("/",(req,res)=>{
    // console.log(req.query)
    // res.send('get 요청 성공')
    res.render('pratice1',{title: "폼전송실습"})
})

app.get("/getForm",(req,res)=>{
    console.log(req.query)
    res.render('praticeResult',{title: "폼전송실습", userInfo : req.query})
})

app.post('/',(req,res)=>{
    // console.log(req.body)
    // res.send("post 요청 성공")
    res.render('pratice1',{title: "폼전송실습"})
})
app.post("/postForm",(req,res)=>{
    console.log(req.body)
    res.render('praticePostResult',{title: "Post 전송실습", userInfo : req.body})
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})  