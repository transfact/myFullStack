const mysql = require("mysql2")


const conn =mysql.createConnection({
    host : "localhost",
    user : "gichun",
    password : "0518",
    database : 'kdt9'
})



exports.requestSignUp = (id,pw,name,cb) => {
    conn.query(`insert into users (userid, name,pw) select "${id}","${name}","${pw}" from dual 
    where not exists (select * from users where userid = "${id}");`
    , (err,rows,field)=>{
        if (err){
            throw err;
        }else{
            console.log(rows.affectedRows)
            if(rows.affectedRows==0){
                cb({result : false})
            }else{
                cb({result : true})
            }

        }
        // console.log("get row",rows)
        // cb(rows);
    })
}

exports.requestLogIn = (id,pw,cb) => {
    conn.query (`select * from users where userid = "${id}" and pw = "${pw}" `
    , (err, rows, field) =>{
        if (err){
            console.log(err)
        }else{
            console.log(rows)
            if(rows[0]){
                rows[0]['loginCheck']=true
                cb({"try": "success",'loginfo' : rows})
            }else{
                cb({"try": "failure",'loginfo': [{
                    loginCheck : false,
                    id : 0,
                    userid : 0,
                    name : 0,
                    pw :0
                }]})
            }
        }
    }
    )
}
exports.requestDel = (id,cb)=>{
    conn.query(`delete from users where id = "${id}" `, (err,rows)=>{
        if (err){
            throw err;
        }else{
            console.log(rows)
            cb({result : true});
        }

    })
}
exports.requestEdit = (id,userid,name,pw,cb)=>{
    conn.query(`update users set userid = '${userid}',name = '${name}',pw = '${pw}'  where id = "${id}" `, (err,rows)=>{
        if (err){
            throw err;
        }else{
            console.log(rows)
            cb({result : true});
        }

    })
}