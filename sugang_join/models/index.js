'use strict';
const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델
//1 
db.Student = require("./mStudent")(sequelize)
db.Classes = require("./mClass")(sequelize)
db.Professor = require("./mProfessor.js")(sequelize)

// 1대1 [1]
db.StudentProfile = require("./mStudentProfile.js")(sequelize)
db.ProfessorProfile = require('./mProfessorProfile.js')(sequelize)

//1대다 [1]
db.Sugang = require("./mSugang.js")(sequelize)
//관계형성
//1:1 학생과 프로필 
db.Student.hasOne(db.StudentProfile,{foreignKey : "student_id"})
db.StudentProfile.belongsTo(db.Student,{foreignKey : "student_id"})
//관계형성
//1:1 교수와 프로필 
db.Professor.hasOne(db.ProfessorProfile,{foreignKey : "professor_id"})
db.ProfessorProfile.belongsTo(db.Professor,{foreignKey : "professor_id"})

//1:다 class:수강
//1:다 학생 :수강
//즉 직접적으로 학생과 클래스가 연관을 가지지 않고, 수강이라는 보조 table과 연관을 가짐.
db.Classes.hasMany(db.Sugang,{foreignKey : "class_id"})
db.Sugang.belongsTo(db.Classes,{foreignKey : "class_id"})

db.Student.hasMany(db.Sugang,{foreignKey : "student_id"})
db.Sugang.belongsTo(db.Student,{foreignKey : "student_id"})

//1 대 다  professor : class
// 이렇게 하는 이유는 교수가 같더라도 시간이 다르면 실제로 다른 수업이라서.
db.Professor.hasMany(db.Classes,{foreignKey : "professor_id"})
db.Classes.belongsTo(db.Professor,{foreignKey : "professor_id"})

//관계형서웨

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
