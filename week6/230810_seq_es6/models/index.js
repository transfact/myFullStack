'use strict';


const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config);

db.users= require("./mUser")(sequelize,Sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
