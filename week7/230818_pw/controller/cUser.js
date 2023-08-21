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

//로그인
exports.LogIn2 = async (req, res) => {
    const { id, pw } = req.body;
    const result = await User.findOne({
        where: { userid :id },
    });
    if (!result) {
        res.json({ result: false, message: '사용자가 존재하지 않습니다' });
    }
    const compare = comparePassword(pw, result.pw);
    if (compare) {
        console.log("login")
        res.json({ result: true });
    } else {
        console.log("login fails")
        res.json({ result: false, message: '비밀번호가 일치하지 않습니다' });
    }
};
exports.LogIn = async (req,res)=>{
    const {id,pw}= req.body
    let result = await User.findOne({
        where : {
            userid : id
        }
    })
    if(!result){
        console.log("login fails")
        res.json({ result: false, message: '아이디가 일치하지 않습니다' });
        return;
    }
    const compare = comparePassword(pw, result.pw);
    if(compare){
        console.log("login")
        res.send({code:1,result});
    }else{
        console.log("login fails")
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
        res.send({code:1,result});
    }else{
        res.send({code:0});
    }

}
const bcryptPassword = (password,bc_salt) =>{
    return bcrypt.hashSync(password,bc_salt)
}

//비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};