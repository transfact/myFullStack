const fs = require("fs").promises;
const http = require("http") //관례
//                                       요청,응답
const server =http.createServer( async function(req,res){
    // 응답      200번 -> 요청성공
    try{
        const data=await fs.readFile('5_http.html')
        res.writeHead(200);
        res.end(data)
    }catch(err){
        console.log(err);
        res.writeHead(404);
        res.end(err.mesage);
    }
    // res.writeHead(200);
    // res.write("<h1>hello world!</h1>");
    // res.end("<p>end</p>");
});

// 개발자 포트는 8080++, 리액트 쓰면 3000 쓴다고 함 ㅇㅇ
// 서버를 열고 닫기
server.listen(8080,function(){
    console.log("서버호출")

});






// const mod = require("./module");
// const {a,b} =require("./module");
// // 객체만 된다
// let [qw,er] = "123/123".split("/");
// console.log(a,b)
// console.log(qw,er)
