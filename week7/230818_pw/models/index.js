'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV ;
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User=require("./mUser")(sequelize)

module.exports = db;
