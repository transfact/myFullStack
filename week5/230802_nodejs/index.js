const express = require("express")
const app=express();
const PORT = 8080;

//body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs");
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/axios',(req,res)=>{
    //get은 query
    console.log('back_axios_get',req.query)
    //원래라면 중간 과정이 있다 그래서 임의로 만들어주었다
    req.query.gender+="axios"
    res.send(req.query)
})


app.get('/fetch',(req,res)=>{
    //get은 query
    console.log('back_fetch_get',req.query)
    //원래라면 중간 과정이 있다 그래서 임의로 만들어주었다
    req.query.gender+="fetch"
    res.send(req.query)
})
app.post('/fetch',(req,res)=>{
    //get은 query
    console.log('back_fetch_post',req.body)
    //원래라면 중간 과정이 있다
    //예제니까 그냥 다시 보내주자
    res.send(req.body)
})

app.post('/axios',(req,res)=>{
    console.log('back_axios_post',req.body)
    res.send(req.body);
})

app.get('/ajax',(req,res)=>{
    //get은 query
    console.log('back',req.query)
    //원래라면 중간 과정이 있다 그래서 임의로 만들어주었다
    req.query.name+=1
    req.query.gender+="qew"
    res.send(req.query)
})

app.post('/ajax',(req,res)=>{
    //get은 query
    console.log('back_post',req.body)
    //원래라면 중간 과정이 있다
    //예제니까 그냥 다시 보내주자
    res.send(req.body)
})

//servert start

app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`)
})