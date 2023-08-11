'use strict';
const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델

db.Student = require("./mStudent")(sequelize)
db.Classes = require("./mClass")(sequelize)

db.Student.hasMany(db.Classes,{foreignKey : "student_id"})
db.Classes.belongsTo(db.Student,{foreignKey : "student_id"})


//관계형서웨

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
