const { DataTypes } = require("sequelize");

const classModel = (sequelize) =>{
    const Classes = sequelize.define(
        "classes",
        {
            class_id : {
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            name  : {
                type : DataTypes.STRING(31),
                allowNull : false,
            },
            room : {
                type : DataTypes.STRING(7),
            },
            code : {
                type : DataTypes.STRING(7),
                allowNull : false,
            },
            personnel : {
                type: DataTypes.INTEGER,
                allowNull : false,
            }
            ,
            professor_id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                foreignKey : true,

            }
        }
    )
    return Classes
}
module.exports = classModel