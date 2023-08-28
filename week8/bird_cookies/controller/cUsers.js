const memberlist = require("../model/filelist")

//쿠키 설정하기
const cookieConfig = {
    httpOnly : true,
    maxAge : 60 * 1000 ,//10분 ,
}
const home = (req,res) =>{
    console.log(req.cookies)
    console.log(typeof req.cookies)
    if(Object.keys(req.cookies).includes("login")){
        res.render("index")
    }else{
        res.send("<script>alert('로그인해주세요!');location.href='/login';</script>");
    }
}

const login =(req,res)=>{
    res.render("login")
}
const loginCheck =(req,res)=>{
    const {userid,pw} = req.body
    console.log("hi",userid,pw)
    for(let i=0; i<memberlist.length;i++){
        console.log(memberlist[i])
        if (memberlist[i].userid==userid  && memberlist[i].pw==pw){
            res.cookie("login","1",cookieConfig)
            req.session.isLogIn=memberlist[i].name
            req.session.memberInfo=memberlist
            res.send({"result":1,data:memberlist})
        }
    }
}
const members = (req,res)=>{
    if(req.session.isLogIn){
        console.log("members")
        res.render("members",{name: req.session.isLogIn,data:req.session.memberInfo})
    }else{
        console.log("redirect")
        res.redirect("/")
    }
}

const logOut = (req,res)=>{
    res.clearCookie('login',{maxAge : -1})
    req.session.destroy()
    res.send("<script>location.href='/';<script>")
}
module.exports = {
    home,
    login,
    loginCheck,
    members,
    logOut
}