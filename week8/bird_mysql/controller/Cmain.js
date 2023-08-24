const model = require('../model/Model');
//메인페이지
const main = (req, res) => {
    res.render('index');
};

//get은 get끼리 모으자.
//회원가입 페이지
const signUp = (req,res)=>{
    res.render('signup');
};
//로긴 페이지
const signIn = (req,res)=>{
    res.render('signin');
};
//post, 회원가입
const requestSignUp = (req,res)=>{
    const {id,name,pw} = req.body
    model.insertMember({id,name,pw},()=>{
        console.log("hi")
        res.send({result:0})
    })
};
//post, 로그인
const requestSignIn = (req,res)=>{
    const {id,pw} = req.body
    model.findMember({id,pw},(result)=>{
        if(result){
            res.send({result:1,data:result[0]})
        }else{
            res.send({result:0,data: null})
        }
    })
};
//patch
const changeMember = (req,res)=>{
    const {id,pw,name} = req.body
    model.changeMember({id,pw,name},(result)=>{
        if(result){
            res.send({result:1,data:result[0]})
        }else{
            res.send({result:0,data: null})
        }
    })
}
const findMember = (req,res)=>{
    const {id} = req.params
    model.findMember({id},(result)=>{
        if(result){
            res.send({result:1,data:result})
        }else{
            res.send({result:0,data: null})
        }
    })
}


module.exports ={
    main,
    signUp,
    signIn,
    requestSignUp,
    requestSignIn,
    findMember ,
    changeMember
}