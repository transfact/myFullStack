import { DataTypes } from 'sequelize';

const Model = (sequelize) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //NOT NULL
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        done: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: 0,
        },
    });
};

export default Model;
