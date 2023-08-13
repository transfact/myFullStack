const { DataTypes } = require("sequelize")

const studentProfileModel = function(sequelize) {
    const model = sequelize.define(
        'professor_profile',
        {
            professor_profile : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            name : {
                type : DataTypes.STRING(15),
                allowNull :false,
            },
            major : {
                type : DataTypes.STRING(31),
                allowNull : false
            },
            professor_id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                foreignKey : true
            },
        },
        {

        }
    )

    return model
}
module.exports =studentProfileModel