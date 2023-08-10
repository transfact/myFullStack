const user = function(sequelize, datatype) {

    const model =sequelize.define(
        'users'
    ,
    {
        id : {
            type : datatype.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        userid : {
            type : datatype.STRING(20),
            allowNull : false,
        },
        name : {
            type : datatype.STRING(10),
            allowNull : false,
        },
        pw : {
            type : datatype.STRING(20),
            allowNull : false,
        },

    },
    {

    })

}
module.exports =user;