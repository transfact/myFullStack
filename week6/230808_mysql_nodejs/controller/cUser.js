const user= require("../model/mUser")


exports.main= (req,res) => {
    res.render('index')
}

exports.toSignUp= (req,res) => {
    res.render('signup')
}
exports.toLogIn= (req,res) => {
    res.render('signin')
}
exports.requestSignUp= (req,res)=>{
    console.log(req.body)
    const {id,pw,name} = req.body
    user.requestSignUp(id,pw,name,(result)=>{
        res.send(result)
    })

}
exports.requestLogIn=(req,res)=>{
    console.log(req.body)
    const {id,pw} = req.body
    user.requestLogIn(id,pw,(result)=>{
        res.send(result)
    })
}

exports.toProfile=(req,res)=>{
    console.log("req",req.body)
    const {loginCheck,id,userid,name,pw} = req.body
    if(loginCheck){
        res.render("profile", {data : req.body})
    }else{
        res.send("reload")
    }
 
}
exports.requestDel=(req,res)=>{
    console.log(req.body)
    const {id} = req.body
    user.requestDel(id,(result)=>{
        res.send(result)
    })
}
exports.requestEdit=(req,res)=>{
    console.log(req.body)
    const {id,userid,name,pw} = req.body
    user.requestEdit(id,userid,name,pw,(result)=>{
        res.send(result)
    })
}