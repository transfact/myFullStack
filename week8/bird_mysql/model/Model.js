const mysql = require('mysql2');
//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'gichun',
    password: '0518',
    database: 'kdt9',
    port: 3306,
});
//데이터베이스에 회원가입정보 저장
exports.insertMember = ({id,name,pw},cb) =>{
    const nowDate = new Date()
    const dateString=`20230823`
    let query=`Insert into User (userid,pw,name,createdAt,updatedAt) values('${id}','${pw}','${name}','${dateString}','${dateString}')`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(rows)
        cb();
    })

}

exports.findMembers = (callback)=>{
    const query= `select * from user`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        callback(rows);

    })
}


exports.changeMember= ({id,pw,name},callback) =>{
    const query= `update user set name=?, where userid='? and pw = ? `
    conn.query(query,[id,pw,name],(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        callback(rows);
    })
}

exports.findMember = ({id,pw},callback)=>{
    const query= `select * from user where userid= ? and password = ?`
    conn.query(query,[id,pw],(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        callback(rows);

    })
}
