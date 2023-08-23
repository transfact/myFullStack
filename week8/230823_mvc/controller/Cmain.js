const Visitor = require('../model/Model');


//모듈 사용법
//exports.main == module.exports.main
// 방법2
//const main,comments
//module.exports = { main, comments}

exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req,res)=>{
    console.log("comments : ",Visitor())
    res.render("comments",{lists:Visitor()})  
}
exports.comment = (req,res)=>{
    //물음표는 query
    const id = Number(req.params.id)
    res.render("comment",{data : Visitor()[id-1]})
}


