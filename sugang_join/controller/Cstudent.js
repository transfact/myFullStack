
const {Student,StudentProfile,Classes} = require("../models/index.js")

exports.main = (req,res) =>{
    res.render(index.js)
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
