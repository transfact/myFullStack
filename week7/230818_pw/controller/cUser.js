const { User } = require('../models');
const bcrypt =require("bcrypt")
const bc_salt=9
exports.index = (req, res) => {
    res.render('index');
};

//로그인으로
exports.toLogIn = (req,res)=>{
    res.render('login');
}
//로그인기능
exports.LogIn = async (req,res)=>{
    const {id,pw}= req.body
    console.log(id,pw)
    const password = bcrypt.hashSync(pw,bc_salt)
    console.log("pw:" , password)
    let result = await User.findOne({
        where : {
            userid : id,
            pw :password
        }
    })
    
    console.log(result)
    if(result){
        res.send({code:1});
    }else{
        res.send({code:0});
    }

}

//회원가입으로
exports.toSignUp = (req,res)=>{
    res.render('signup');
}

//회원가입기능
exports.SignUp = async (req,res)=>{
    const {id,pw,name}= req.body
    console.log(id,pw,name)
    
    const password = bcrypt.hashSync(pw,bc_salt)
    console.log("pw: " , password)
    let result = await User.create({
        userid : id,
        pw : password ,
        name : name
    })
    console.log(result)

    if(result.id!=undefined){
        res.send({code:1});
    }else{
        res.send({code:0});
    }

}
const bcryptPassword = (password,bc_salt) =>{
    return bcrypt.hashSync(password,bc_salt)
}

//비교
