'use strict';
const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델

db.Student = require("./mStudent")(sequelize)
db.Classes = require("./mClass")(sequelize)
db.StudentProfile = require("./mStudentProfile.js")(sequelize)

//관계형성
//1:1 학생과 프로필 
db.Student.hasOne(db.StudentProfile,{foreignKey : "student_id"})
db.StudentProfile.belongsTo(db.Student,{foreignKey : "student_id"})

//1:다 학생과 강의(수정할꺼임)
db.Student.hasMany(db.Classes,{foreignKey : "student_id"})
db.Classes.belongsTo(db.Student,{foreignKey : "student_id"})


//관계형서웨

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
