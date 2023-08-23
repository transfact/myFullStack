const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

module.exports = ()=>{
    return  [   {
        id : 1 ,
        userid : 'l1',
        date : '2023-08-05',
        comment :"hi"
    },
    {
        id : 2 ,
        userid : 'l2',
        date : '2023-08-05',
        comment :"bye"
    },
    {
        id : 3 ,
        userid : 'l3',
        date : '2023-08-05',
        comment :"hello"
    },
    {
        id : 4 ,
        userid : 'l4',
        date : '2023-08-05',
        comment :"goodbye"
    },
]
}