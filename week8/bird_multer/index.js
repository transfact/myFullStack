const express = require('express');
const multer =require('multer')
const aws = require("aws-sdk")
const multers3= require("multer-sdk")
const path=require('path')
const app = express();
const PORT = 8080;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

aws.config.update({
    accessKeyId:"AKIA4GRTGI6TYJVPLNVB",
    secretAccessKey : "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",
    region : "ap-northeast-2"
})

const s3 = new aws.S3();
const limits = {
    fileSize: 5 * 1024 * 1024, //5mb
};
const upload = multer({
    storage : multers3({
        s3: s3,
        bucket: "hwr-bucket",
        acl : "public-read",
        metadata : function(req,file,cb){
            cb(null,{fieldName: file.fieldName})
        },
        key(req, file, cb) {
            cb(null, `${Date.now()}_${path.basename(file.originalname)}`) // original 폴더안에다 파일을 저장
         },
    }),
    limits : {
        fileSize: 5 * 1024 * 1024, //5mb
    }
})

app.use('/uploads', express.static(__dirname + '/uploads'));




//router
app.get('/', (req, res) => {
    res.render('index');
});



app.post('/multiAxios',  (req,res)=>{
    const files = upload.array('array_files')

    files(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          const err = new Error('Multer error');
          console.log(err)
          return ;
          } else if (err) {
          // An unknown error occurred when uploading.
          const err = new Error('Server Error')
          console.log(err)
          return;
        }
       
        filePathArray=[]
        for(let i=0; i<req.files.length; i++){
            filePathArray[i]=req.files[i].path
        }
        return res.json({
            "filePath" :filePathArray
          });
    })


})
//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});



// const storage =multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     //filename: 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
//     filename: (req, file, cb) => {
//         //extname: 확장자를 추출
//         const ext = path.extname(file.originalname);
//         const name = encodeURIComponent(file.originalname);
//         //basename: 파일이름 추출(파일이름, 확장자) => 확장자를 제외해서 파일이름이 추출
//         const newName = path.basename(name, ext) + Date.now() + ext;
//         cb(null, newName);
//     },
// })
//key-value에서 key값과 value의 변수가 동일 하면 합칠 수 있음
//const upload = multer({ storage, limits });
