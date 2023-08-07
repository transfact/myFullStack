const mysql = require("mysql2")


const conn =mysql.createConnection({
    host : "localhost",
    user : "gichun",
    password : "0518",
    database : 'kdt9'
})

exports.getVisitors = (cb) => {
    conn.query("select * from visitor", (err,rows,field)=>{
        if (err){
            throw err;
        }
        console.log("field",field)
        console.log('visitor.js',rows)
        cb(rows);
    })
}

exports.getVisitor = (id,cb) => {
    conn.query(`select * from visitor where id = '${id}'`, (err,rows)=>{
        if (err){
            throw err;
        }
        cb(rows);
    })
}
//추가
exports.postVisitor = (name,comment,cb) => {
    conn.query(`insert into visitor (name,comment) values ("${name}","${comment}")`, (err,rows,field)=>{
        if (err){
            throw err;
        }
        console.log("postrow",rows.insertId)
        cb({id : rows.insertId ,name : name, comment : comment});
    })
}
//변경
exports.patchVisitor = (cb) => {
    conn.query("select * from visitor", (err,rows)=>{
        if (err){
            throw err;
        }
        cb(rows);
    })
}

//삭제
exports.deleteVisitor = (id,cb) => {
    conn.query(`delete from visitor where id = "${id}" `, (err,rows)=>{
        if (err){
            throw err;
        }
        console.log(rows)
        cb({id : rows.insertId});
    })
}
