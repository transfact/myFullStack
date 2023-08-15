
const {Student,StudentProfile,Classes} = require("../models/index.js")

exports.main = (req,res) =>{
    res.render('index')
}

//로그인 페이지로
exports.login = (req,res) =>{
    res.render('login')
}

//로그인 요청  /login/reqSignIn
exports.loginRequest = async (req,res) =>{
    let {user_id,password}  = req.body

    console.log("id: ",user_id)
    console.log("session", req.session)

    try {
        const result= await Student.findOne({
            where : {
                user_id : user_id,
                password : password
            }
        })
        console.log(result)
        if(result){
            req.session.loginSuccess=1
            req.session.user_id=user_id
        }
    }catch(err){
        console.log(err)
    }
    res.send("hello")
}
exports.post_class = async (req,res) =>{
    try{
        const {name,room,code,teacher_name,student_id} =req.body
        const result = await Classes.create({
            name,
            room,
            code,
            teacher_name,
            student_id
        })
        res.send(result)
    }catch(err){
        console.log(err)
    }
}
exports.post_student = async (req,res) =>{
    try {
        const {user_id, password,email, name,major} =req.body
        console.log(req.body.user_id)
        const studentResult = await Student.create({
            user_id,
            password : password,
            email : email,
            student_profile : {
                name,major
            }
        },
        //StudentProfile이 어떤 것인가?
        //여러개를 include할 수 있으니 [{model : StudentProfile}]
        {
            include : StudentProfile
        })
        res.send(studentResult)
    }catch(err){
        console.log(err)
    }
}

exports.get_student = async (req,res) =>{
    try{
        //include  : query를 실행할 때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
        //
        console.log("check",Student.rawAttributes )
        const studentResult = await Student.findAll(
            
            {
                attributes : ["student_id","user_id","email"],
                include : [{model : StudentProfile, attributes : ['major','name']}]
            }
        )
        console.log(studentResult)
        res.send(studentResult)
    }catch(err){
        console.log(err)
    }
}
