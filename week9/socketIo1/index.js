const express = require("express")
const http = require("http")
const socketIO =require("socket.io")
const app =express()
const PORT = 8080
const server = http.createServer(app)
//https://velog.io/@yogjin/express-app.listen-%EA%B3%BC-server.listen%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90
const io = socketIO(server)

// const s= new Set()
// s.add("12")
// s.add("13")
// const q= new Map()
// q.set("1",s)
// console.log(q)
app.set("view engine","ejs")
app.set('views','./views')

app.get("/",(req,res)=>{
    res.render("client")
})
app.get("/chat",(req,res)=>{
    res.render("chat")
})
const room_participants = {}
const nicknames={}

io.on("connection",(socket)=>{
    socket.on("join",(res)=>{
        //채팅방을 생성하는 방법은 join 방아이디 사용 이미 존재하면 들어감
        socket.join(res.name)
        socket.room= res.name;
        console.log("socketroom",socket.room)
        //broadcast 나를 제외한 전체사용자에게 메시지 전달
        socket.broadcast.to(res.name).emit("create",`${socket.id}님이 입장하였습니다.`)
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)
        room_participants[socket.room]=roomInfo
        socket.to(res.name).emit("getId",room_participants,nicknames)
    })

    socket.on('message', (res)=>{
        socket.broadcast.to(socket.room).emit('chat',res)
    })
    socket.on('message2', (user,message)=>{
        //아이디 변화 감지시
        if(socket.myNickname == undefined || socket.myNickname!=user){
            delete nicknames[socket.myNickname]
            socket.myNickname=user
            nicknames[user]=socket.id
            console.log(nicknames)
            //아이디 전부 보내주기
            socket.to(socket.room).emit('getId',room_participants,nicknames)
        }
        socket.broadcast.to(socket.room).emit('chat2',{user,message})
    })
    socket.on("open_message",(msgObject)=>{
        console.log(msgObject)
        // cb(msgObject);
    })
    socket.on("form-message",(msgObject)=>{
        console.log(msgObject)
        socket.broadcast.emit("backend_message",msgObject)
    })
    socket.on('leave',()=>{
        socket.leave(socket.room)
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)
        room_participants[socket.room]=roomInfo
    })
    // socket.on("assignment1",(msgObject)=>{
    //     console.log(msgObject)
    //     io.emit("assignment1_answer",{name:"server" ,message : msgObject.message})
    // })
})
    


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})