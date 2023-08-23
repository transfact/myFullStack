const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});


module.exports=[
    {
        id : 1,
        name : "lee",
        sex: "남",
        major : "소프트웨어"
    },
    {
        id : 2,
        name : "gang",
        sex: "남",
        major : "소프트웨어"
    },
    {
        id : 3,
        name : "psy",
        sex: "남",
        major : "연예인"
    },
    {
        id : 4,
        name : "jin",
        sex: "여",
        major : "컴퓨터공학"
    },
    {
        id : 5,
        name : "chun",
        sex: "남",
        major : "소프트웨어"
    },
    {
        id : 6,
        name : "hye",
        sex: "여",
        major : "컴퓨터공학"
    },
]