import express from 'express';
import db from './models/index.js';
import cors from 'cors';
import router from './router/index.js';
const app = express();
const PORT = 8080;
//CORS오류방지
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리

app.use('/', router);

//db싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(default) 테이블이 존재하는 패쓰, 없으면 생성
db.sequelize
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
