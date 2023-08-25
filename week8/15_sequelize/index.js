const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');

//세션 선언
const session = require("express-session")

//쿠키는 여기서 선언해라.
const cookieParser = require("cookie-parser")


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret : "mySession", //서명
    secure : false, // true면 https 에서만
    resave : false, // true면 수정사항이 생기지 않아도 매 요청마다 세션을 저장한다 (false 권장)
    saveUninitialized :true, //세션에 저장할 내역이 없어도 처음부터 세션을 생성할 시 생성할지 설정 (보통 TRUE) 
    //쿠키
    cookie : {
        httpOnly : false,
        maxAge : 60 * 1000 * 1
    }, 
    }
))
//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

//db싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(default) 테이블이 존재하는 패쓰, 없으면 생성
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
