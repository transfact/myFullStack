
const {writeFile} =require("fs")
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

const nicknames={}

io.on("connection",(socket)=>{
    socket.on("join",(res)=>{
        //채팅방을 생성하는 방법은 join 방아이디 사용 이미 존재하면 들어감
        socket.join(res.name)
        socket.room= res.name;
        console.log("myroom",socket.room)
        //broadcast 나를 제외한 전체사용자에게 메시지 전달
        socket.myNickname=res.nickname
        socket.broadcast.to(res.name).emit("create",`${res.nickname}님이 입장하였습니다.`)

        if(!nicknames[socket.room]){
            nicknames[socket.room]={}
        }
        nicknames[socket.room][res.nickname] = socket.id
        io.to(res.name).emit("getId",nicknames[socket.room])

    })

    socket.on('message', (res)=>{
        socket.broadcast.to(socket.room).emit('chat',res)
    })
    socket.on('message2', (user,message)=>{
        //아이디 변화 감지시
        if(socket.myNickname == undefined || socket.myNickname!=user){
            delete nicknames[socket.room][socket.myNickname]
            socket.myNickname=user
            nicknames[socket.room][user]=socket.id
            console.log("message2",nicknames)
            //아이디 전부 보내주기
            io.to(socket.room).emit('getId',nicknames[socket.room])
        }
        socket.broadcast.to(socket.room).emit('chat2',{user,message})
    })
    //귓속말
    socket.on('message3', (user,message,toUser)=>{
        //아이디 변화 감지시
        if(socket.myNickname == undefined || socket.myNickname!=user){
            delete nicknames[socket.room][socket.myNickname]
            socket.myNickname=user
            nicknames[socket.room][user]=socket.id
            console.log("message3",nicknames)
            //아이디 전부 보내주기
            io.to(socket.room).emit('getId',nicknames[socket.room])
        }
        socket.to(toUser).emit('chat3',{user,message})
    })
    socket.on("open_message",(msgObject)=>{
        console.log(msgObject)
        // cb(msgObject);
    })
    socket.on("form-message",(msgObject)=>{
        console.log(msgObject)
        socket.emit("backend_message",msgObject)
    })
    socket.on('leave',(id)=>{
        socket.to(socket.room).emit("create",`${socket.myNickname}님이 퇴장하였습니다.`)
        socket.leave(socket.room)
        delete nicknames[socket.room][id]
        io.to(socket.room).emit('getId',nicknames[socket.room])
    })
    socket.on('getOut',(id)=>{
        console.log("fired")
        socket.to(nicknames[socket.room][id]).emit('fired')
    })

    socket.on("upload", (file) => {
        console.log(file); // <Buffer 25 50 44 ...>
        io.to(socket.room).emit('Images',file)
        // save the content to the disk, for example

      });
    // socket.on("assignment1",(msgObject)=>{
    //     console.log(msgObject)
    //     io.emit("assignment1_answer",{name:"server" ,message : msgObject.message})
    // })
})
    


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/chat`)
})