//visitor에 대한 table 정의

const visitor = function(sequelize,DataTypes){
    //sequelize는 models의 index.js에 있는 sequelize
    //datatype = models/index.js Sequelize
    const model = sequelize.define(
        "visitor",
        {
            id : {
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            name : {                
                type: DataTypes.STRING(10),
                allowNull : false,
            },
            comment : {
                type : DataTypes.TEXT("medium"),

            }
            
        },
        
        {
            //visitor table이 이미 있는 경우
            // tableName : 'visitor',
            // freezeTableName : true,
            // timestamps : false
        }
    );
    return model
}
module.exports=visitor