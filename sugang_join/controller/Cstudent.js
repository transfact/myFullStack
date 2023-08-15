
const {Student,StudentProfile,Classes, Professor} = require("../models/index.js")
const SECRET = "13141ggdagr342"
const jwt = require('jsonwebtoken')

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
    let result
    try {
        result= await Student.findOne({
            where : {
                user_id : user_id,
                password : password
            }
        })
        console.log("res",result)
    }catch(err){
        console.log(err)
    }
    if (result===undefined){
        res.send("fail")
    }else{
        const token = jwt.sign({user_id:user_id},SECRET,);    
        res.send({result,token})
    }
}

//수강신청 메인으로
exports.to_sugang_main =  async (req,res) =>{
    console.log(req.body)
    try {
        let result = await StudentProfile.findOne({
            where :{
                student_id : req.body.student_id
            },
            include :[{model : Student}]
        })
        console.log("tosugangmain",result)
        res.render("sugang_main",{'data':result})
    }catch(err){
        console.log(err)
        res.render("index")
    }
}


//수강신청 검증
exports.verify_sugang =(req,res)=>{
    console.log(req.headers.authorization);
    const auth = req.headers.authorization
    const token = auth.split(" ")
    if(token[0]==='Bearer'){
        jwt.verify(token[1],SECRET,(err,result)=>{
            if (err){
                console.log(err)
                res.status(403).send({message : "검증 실패"})
            }else{
                //err가 없으니 data를 담아서 넘겨준다.
                console.log("검증완료", result)
                res.send({"verify" : 1})
            }
        })
    }else{
        res.send({"message" : "잘못된 인증방식입니다"})
    }
}
exports.to_sugang_register = async (req,res)=>{
    const {student_id,name} =req.body
    try {
        const classResult =await Classes.findAll(
            {
                attributes : ["name","room","code","time","class_id"],
                include : [{model : Professor, attributes : ['major','name']}]
            }
        )
        console.log(classResult[0].professor)
        res.render("sugang_register",{data : classResult,data2 : {name,student_id}})
    }catch(err){
        console.log(err)
    }
}

exports.sugang_register =async (req,res) =>{
    req.session.loginChecker=1
    try {
        if(req.session.loginChecker!=1){
            console.log("로그인상태가 아닙니다.")
        }
        const classResult =await Classes.findAll(
            {
                attributes : ["name","room","code","time","class_id"],
                include : [{model : Professor, attributes : ['major','name']}]
            }
        )
        console.log(classResult[0].professor)
        res.render("sugang",{data : classResult})
    }catch(err){
        console.log(err)
    }
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
// 검증용

exports.verify = (req,res)=>{
    console.log(req.headers.authorization);
    const auth = req.headers.authorization
    const token = auth.split(" ")
    if(token[0]==='Bearer'){
        jwt.verify(token[1],SECRET,(err,result)=>{
            if (err){
                console.log(err)
                res.status(403).send({message : "검증 실패"})
            }
            console.log("send",result)
            res.send({
                "verify" : 1
            })
        })
    }else{
        res.send({"message" : "잘못된 인증방식입니다"})
    }
}



//귀찮아서 포스트맨으로 만들것임
exports.makeProfessor = async (req,res)=>{
    try{
        const {name, major} =req.body
        console.log(req.body.user_id)
        const professorResult = await Professor.create({
            name,major
        },)
        console.log(professorResult)
        res.send(professorResult)
    }catch(err){
        console.log(err)
        res.send("err")
    }
}
//귀찮아서 포스트맨으로 만들것임
exports.makeClass = async (req,res)=>{
    try{
        const {name, room,code,time,professor_id} =req.body
        console.log(req.body.user_id)
        const classResult = await Classes.create({
            name, room,code,time,professor_id
        },)
        console.log(classResult)
        res.send(classResult)
    }catch(err){
        console.log(err)
        res.send("err")
    }
}

