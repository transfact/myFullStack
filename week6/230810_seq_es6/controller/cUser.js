import * as user from "../model/mUser.js"


export const main= (req,res) => {
    res.render('index')
}
export const toSignUp= (req,res) => {
    res.render('signup')
}

export const toLogIn= (req,res) => {
    res.render('signin')
}

export const requestSignUp= async (req,res)=>{
    try {
        const {id,pw,name} = req.body
        let result = await user.requestSignUp(id,pw,name);
        console.log(result)
        res.send({result:true})
    }catch(err){
        console.log(err)
    }

}

export const requestLogIn= async (req,res)=>{
    console.log(req.body)
    const {id,pw} = req.body
    try {
        const result = await user.requestLogIn(id,pw)
        res.send(result)
    }catch(err){
        console.log(err)
    }
}

export const toProfile = (req,res) =>{
    console.log("req",req.body)
    const {loginCheck,id,userid,name,pw} = req.body
    if(loginCheck){
        res.render("profile", {data : req.body})
    }else{
        res.send("reload")
    }
}

export const requestDel=async (req,res)=>{
    console.log(req.body)
    const {id} = req.body
    try {
       let result=await  user.requestDel(id)
       res.send(result)
    }catch(err){
        console.log(err)
    }
}
export const requestEdit= async (req,res)=>{
    console.log(req.body)
    const {id,userid,name,pw} = req.body
    const result = await user.requestEdit(id,userid,name,pw)
    res.send(result)
}