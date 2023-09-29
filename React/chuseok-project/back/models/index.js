import { Sequelize } from 'sequelize';
import Config from '../config/config.json' assert { type: 'json' };
// import Config from '../config/config.js';
import Todo from './Todo.js';
const env = process.env.NODE_ENV || 'development';
const config = Config[env];
const db = {};

console.log(config);
const sequelize = new Sequelize(config);

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

//모델
//db에 User생성
// db.User = require('./Todo')(sequelize);
// const model = require('./User');
// const temp = model(sequelize);
// db.User = temp;

db.Todo = Todo(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(db.Todo);
export default db;
