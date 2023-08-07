const visitor= require("../model/mVisitor")


exports.main= (req,res) => {
    res.render('index')
}
exports.getVisitors = (req, res)=>{
    visitor.getVisitors((result) =>{
        console.log("cVisitor.js ",result)
        res.render('visitor',{data : result})
    })
}

exports.getVisitor =(req,res)=>{
    visitor.getVisitor(req.query.id,(result) =>{
        console.log("cVisitor.js ",result)
        res.render('visitor',{data : result})
    })
    // res.send("방명록 하나 조회")
}
exports.postVisitor =(req,res)=>{
    visitor.postVisitor(req.body.name,req.body.comment,(result)=>{
        res.send(result)
    })
    //res.send("방명록 하나 생성")
}
exports.patchVistor =(req,res)=>{
    res.send("방명록 변경")
    
}
exports.deleteVisitor =(req,res)=>{
    let id = req.url.split("/")[3]
    console.log(id)
    visitor.deleteVisitor(id,(result)=>{
        res.send(result)
    })
    res.send("방명록 삭제")
}

