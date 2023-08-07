const express = require("express")
const app =express();
const PORT = 8080;

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.urlencoded({extended:true}))
app.use(express.json())


//임시 데이터 객체

const comments = [
    {
        id : 1,
        userID : "qwer",
        date : "2023-07-21",
        comment : "페하"
    },
    {
        id : 2,
        userID : "qwer",
        date : "2023-07-21",
        comment : "그만큼 즐거우셨다는 거지~"
    },
    {
        id : 3,
        userID : "rewq",
        date : "2023-07-21",
        comment : "페바"
    },
    {
        id : 4,
        userID : "reqw",
        date : "2023-07-21",
        comment : "페바"
    },
]
app.get('/',(req,res)=>{
    res.render("index")
});

app.get("/comments",(req,res)=>{
    console.log(comments)
    res.render('comments',{ commentInfos : comments})
})

//GET              :id가 변수명처럼 들어감
app.get('/comment/:id',(req,res)=>{
    // console.log(req.params.id)
    const commentId=req.params.id
    console.log(comments[commentId-1])
    res.render('comment',{commentInfo :comments[commentId-1]})
})

// * 
app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})