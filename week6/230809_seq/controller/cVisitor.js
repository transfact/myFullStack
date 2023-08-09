// const visitor= require("../model/mVisitor")

const models = require("../models/index.js")
exports.main= (req,res) => {
    res.render('index')
}
exports.getVisitors = (req, res)=>{
    //이 구문이 select * from visitor와 같다
    models.visitor.findAll()
    .then((result)=>{
        res.render('visitor',{data : result})
    })
}

exports.getVisitor =(req,res)=>{
    models.visitor.findOne({
        where : {id : Number(req.query.id)}
    })
    .then((result)=>{
        console.log(result)
        if (result){
            res.render('visitor',{data : [result]})
        }else{
            res.render("404")
        }
        
    })
    // res.send("방명록 하나 조회")
}

exports.postVisitor =(req,res)=>{
    models.visitor.create({
        comment : req.body.comment,
        name : req.body.name
    }).then((result)=>{
        // console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log("imhere2",err['errno'])
        res.send({errcode:  "-1"})
    })
    //res.send("방명록 하나 생성")
};
exports.patchVistor =(req,res)=>{
    models.visitor.update({
        name: req.body.name,
        comment : req.body.comment,
    },
    {
        where : {id : req.body.id}
    }
    ).then((result)=>{
        console.log(result)
        res.send(result)
    })  
}
exports.deleteVisitor =(req,res)=>{
    let id = req.url.split("/")[3]
    models.visitor.destroy({
        where : {id : id}
    }).then((result)=>{
        console.log("destroy: ",result)
        res.send([result])
    })
}

