//컨트롤러
const commentData= require("../model/mComment")


exports.main = (req,res) =>{
    res.render('index');
}

exports.comments = (req,res)=>{
    let comments = commentData.comments();
    res.render('comments',{ commentInfos : comments})
}

exports.comment = (req,res)=>{
    // console.log(req.params.id)
    let commentDatas = commentData.comments();
    const commentId=req.params.id
    console.log(commentDatas[commentId-1])
    res.render('comment',{commentInfo :commentDatas[commentId-1]})
}