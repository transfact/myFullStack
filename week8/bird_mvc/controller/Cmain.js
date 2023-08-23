const students = require('../model/Model');

exports.main = (req, res) => {
    console.log(students)
    res.render('index',{data:students});
};

exports.postInfos = (req, res) => {
    console.log(req.body)
    students[students.length]=    {
        id : req.body.info_id,
        name : req.body.info_name,
        sex: req.body.info_sex,
        major : req.body.info_major
    },
    console.log(students)
    res.render("index",{data:students});
};
