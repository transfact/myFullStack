const express = require("express")
const app = express()
const PORT=8080;

app.set('view engine',"ejs");
app.set("views",'./views');
app.use(express.static('./public'))


app.get("/gugudan",(req,res)=>{
    res.render("gugudan",{startArray : [1,2,3,6,7]})
    // view rendering
    // res.render('gugudan')
})



app.get("/",(req,res)=>{
    // res.send("hello express")
    res.send({result:true, code :1000,message:"회원가입 성공", data : {noneData : none}})
})
app.get("/kdt9",(req,res)=>{
    // view rendering
    res.render('test',{name:"martin"})
    // res.send("hello kdt9")
})

app.get("/bug_index",(req,res)=>{
    // view rendering
    res.render('bug_zindex',{name:"martin"})
})

app.get("/jquery_fruit",(req,res)=>{
    // view rendering
    res.render('jquery_fruit',{name:"martin"})
})

app.get("/web1",(req,res)=>{
    res.render("web1",{goto : ["./web2","./web3"], newImg : "./img/apple.jpeg" })
    // view rendering
    // res.render('gugudan')
})

app.get("/web2",(req,res)=>{
    res.render("web2",{goto : ["./web1","./web3"]})
    // view rendering
    // res.render('gugudan')
})

app.get("/web3",(req,res)=>{
    res.render("web3",{goto : ["./web1","./web2"]})
    // view rendering
    // res.render('gugudan')
})





app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})