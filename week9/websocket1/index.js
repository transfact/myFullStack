const ws= require("ws")
const http = require('http')
const express  = require('express')
const PORT = 8000;

const app =express()
.set("view engine",'ejs')
.set('views','./views')
.get("/",(req,res)=>{
    res.render("client");
})

//get할때 socket이 에러날수 있다고 합니다. 그래서 분리
const server = http.createServer(app)
const wss = new ws.Server({server},)


//wss.open 0 => 연결시도중
//          1=> 열림
//         2 =>닫히는 중
//          3=>닫힘
//socket.readyState =>열렸는지 닫혔는지 확인
const sockets=[]


//sockets 대신 wss.clients를 써도 된다.
//

// on ->이벤트 등록
//socket 변수는 접속한 브라우저
wss.on("connection", (socket)=>{
    console.log("client 연결됨")
    console.log(wss.address())
    
    sockets.push(socket)
    // console.log("hi socket",socket)
    //메세지 이벤트
    //서버가 모두 달라 객ㄱ체를 전달시에는 객체를 직렬화 하는 과정이 필요=>버퍼
    socket.on("message",(message)=>{
        const parseMessage = JSON.parse(message)
        console.log('nickname :' ,parseMessage.nickname)
        console.log(`message from client: ${parseMessage.msg}`)
        // socket.send(`${message}`)
        // console.log(sockets)
        sockets.forEach((element)=>{
            element.send(`${parseMessage.nickname}${parseMessage.msg}`)
        })
    })

    //오류 이벤트
    socket.on('error',(err)=>{
        console.log(err)
    })

    //종료 이벤트
    socket.on('close',(message)=>{
        console.log(message)
    })
})


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})


