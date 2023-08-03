//import
const express =require('express')
const multer = require('multer')
const path=require('path')

const app =express()
const PORT = 8080;
app.use('/uploads',express.static(__dirname+'/uploads'))
//view engine
app.set('view engine','ejs')
app.set('views','./views')

// body parser

app.use(express.urlencoded({extended : true}));
app.use(express.json());


//multer
const upload =multer({
    //폴더가 업로드 되었을 떄 위치
    dest : 'uploads/'
})

const uploadDetail = multer({
    //저장 공간에 대한 정보
    //파일을 디스크에 저장하기 위한 모든 제어 기능 제공
    storage : multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/')
        },
        filename(req,file,done){
            const ext=path.extname(file.originalname);
            done(null,path.basename(file.originalname,ext)+ Date.now()+ ext)
        }
    }),
    //10mb
    limits : {fileSize: 5 * 1024 * 1024}
});

const uploadSignIn = multer({
    //저장 공간에 대한 정보
    //파일을 디스크에 저장하기 위한 모든 제어 기능 제공
    storage : multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/')
        },
        filename(req,file,done){
            const ext=path.extname(file.originalname);
            console.log("hello req",req.body)
            done(null,req.body.id   + ext)
        }
    }),
    //10mb
    limits : {fileSize: 5 * 1024 * 1024}
});

app.get("/",(req,res)=>{
    res.render('myForm')
})

app.post('/upload',uploadDetail.single('userImg'),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send("hello")
})

// 한번의 요청으로 여러개 올릴려고 할떄
app.post('/uploadArray1',uploadDetail.array('userfiles'),(req,res)=>{
    console.log(req.files)
    console.log(req.body)
    res.send("hello")
})

// 여러번의 요청으로 여러개 업로드 할떄

app.post('/uploadArray2',uploadDetail.fields([{name : 'userfield1'},{name : 'userfield2'}]),(req,res)=>{
    console.log(req.files)
    console.log(req.body)
    res.send("hello")
})

app.post('/dynamicFile',uploadDetail.single('dynamic-file'),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send(req.file)
})

//실습 1
app.post('/signIn',uploadSignIn.single('userImg'),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.render("yourForm",{
        img_inform : req.file,
        forms : req.body,
    })
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

app.post('/upload',(req,res)=>{
    console.log(req.body)
})
