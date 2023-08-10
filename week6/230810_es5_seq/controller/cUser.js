const user= require("../models/index.js")


exports.main= (req,res) => {
    res.render('index')
}

exports.toSignUp= (req,res) => {
    res.render('signup')
}
exports.toLogIn= (req,res) => {
    res.render('signin')
}
exports.requestSignUp= async (req,res)=>{
    console.log(req.body)
    const {id,pw,name} = req.body

    try {
        const result =await user.users.create({
            userid : id,
            pw : pw,
            name : name 
        })
        console.log(result)
        res.send(result)
    }catch(err){
        console.log(err)
    }
}
exports.requestLogIn=async (req,res)=>{
    console.log(req.body)
    const {id,pw} = req.body
    try{
        const result = await user.users.findAll({
            where : {
                userid : id,
                pw : pw
            }
        })
        console.log(result)
        if(result){
            console.log("success")
            res.send({"try": "success",'loginfo' : result})
        }else{
            res.send({"try": "failure",'loginfo': [{
                loginCheck : false,
                id : 0,
                userid : 0,
                name : 0,
                pw :0
            }]})
        }


    }catch(err){
        console.log(err)
    }
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
exports.requestDel=async (req,res)=>{
    console.log(req.body)
    const {id} = req.body
    try {
        const result =await user.users.destroy({
            where : {
                id :id
            }
        })        
        console.log(result)
        res.send({'삭제' : "성공"})
    }catch(err){
        console.log(err)
    }
}
exports.requestEdit=async (req,res)=>{
    console.log(req.body)
    const {id,userid,name,pw} = req.body

    try {
        const result = user.users.update({
            userid : userid,
            name : name,
            pw : pw
        },{
            where :{
                id : id
            }
        })
        console.log(result)
        res.send(result)
    }catch(err){
        console.log(err)
    }

}