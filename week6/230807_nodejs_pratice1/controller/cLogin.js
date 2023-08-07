//컨트롤러

//data 
const loginData = require("../model/mLogin")

exports.main = (req,res) =>{
    res.render('login');
}

exports.axiosLogin=(req,res) => {
        //get은 query
    console.log('back_axiosLogin',req.body)
    let id=req.body["id"]
    let pw=req.body['pw']
    idpwObject = loginData.idPw()

    if(id in idpwObject){
        if(idpwObject[id]==pw){
            //성공
            res.send({"try" : "success"})
        }else{
            res.send({"try" : "pw_err"})
        }
    }else{
        res.send({"try" : "id_err"})
    }
}
