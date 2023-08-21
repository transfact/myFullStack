const express = require('express');
const multer =require('multer')
const path=require('path')
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));

const storage =multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    //filename: 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, cb) => {
        //extname: 확장자를 추출
        const ext = path.extname(file.originalname);
        const name = encodeURIComponent(file.originalname);
        //basename: 파일이름 추출(파일이름, 확장자) => 확장자를 제외해서 파일이름이 추출
        const newName = path.basename(name, ext) + Date.now() + ext;
        cb(null, newName);
    },
})
const limits = {
    fileSize: 5 * 1024 * 1024, //5mb
};
//key-value에서 key값과 value의 변수가 동일 하면 합칠 수 있음
const upload = multer({ storage, limits });

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
