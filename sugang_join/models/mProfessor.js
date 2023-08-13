const { DataTypes } = require("sequelize")


const professorModel = (sequelize)=>{
    const professor = sequelize.define(
        "professor",
        {
            professor_id : {
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            name  : {
                type : DataTypes.STRING(31),
                allowNull : false,
            },
            major : {
                type : DataTypes.STRING(31),
                allowNull : false
            },

        }
    )

    return professor
}

module.exports = professorModel