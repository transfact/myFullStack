const { DataTypes } = require("sequelize")

const sugang   = function(sequelize) {
    const model = sequelize.define(
        'sugang',
        {
            student_id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                foreignKey : true
            },
            class_id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                foreignKey : true
            }
        }
    )
    return model
}
module.exports = sugang