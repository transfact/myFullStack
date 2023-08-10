import mysql from "mysql2/promise"
//import promisemysql from "mysql2/promise"

//mysql  단일 연결, 매번 연결이 필요할떄 마다 새로운 연결
//연결 수가 많아지면 성능에 영향생김
// const conn2 =mysql.createConnection({
//     host : "localhost",
//     user : "gichun",
//     password : "0518",
//     database : 'kdt9'
// })

//서비스용 : 여러개의 연결을 미리 생성및 관리, 동시처리 가능함
const conn =mysql.createPool({
    host : "localhost",
    user : "gichun",
    password : "0518",
    database : 'kdt9'
})


export const requestSignUp = async (id,pw,name)=>{
    try {
        const query = "insert into users (userid, name,pw) select ?, ?, ? from dual where not exists (select * from users where userid = ?); "
        const [rows] = await conn.query(query,[id,name,pw,id])
        console.log(rows.affectedRows)
        if(rows.affectedRows==0){
            return {result : false}
        }else{
            return {result : true}
        }
    }catch(err){

    }

}
export const requestLogIn = async (id,pw) => {
    try {
        const query = "select * from users where userid = ? and pw = ? "
        const [rows] = await conn.query(query,[id,pw])
        if(rows[0]){
            rows[0]['loginCheck']=true
            return {"try": "success",'loginfo' : rows}
        }else{
            return {"try": "failure",'loginfo': [{
                loginCheck : false,
                id : 0,
                userid : 0,
                name : 0,
                pw :0
            }]}
        }
    }catch(err){
        console.log(err)
    }
}
export const requestEdit = async (id,userid,name,pw,cb)=>{
    try {
        const query = 'update users set userid = ?,name = ? , pw = ?  where id = ?'
        const [rows] = await conn.query(query,[userid,name,pw,id])
        console.log(rows)
        return {result : true};
    }catch(err){
        console.log(err)
    }
}
export const requestDel =  async (id)=>{
    try {
        const query = "delete from users where id = ?"
        const [rows] = await conn.query(query,[id])
        console.log(rows)
        return {result : true};
    }catch(err){
        console.log(err)
    }
}
