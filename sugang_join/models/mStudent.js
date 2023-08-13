const { DataTypes } = require("sequelize")


const studentModel = (sequelize) =>{
    const Student = sequelize.define(
        "student",
        {
            student_id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            user_id : {
                type : DataTypes.STRING(31),
                allowNull : false
            },
            password : {
                type : DataTypes.STRING(255),
                allowNull : false
            },
            email : {
                type : DataTypes.STRING(127),
                allowNull :true
            } //email : DataTypes.STRING(127)도 가능
        }
    )
    return Student
}
module.exports = studentModel

