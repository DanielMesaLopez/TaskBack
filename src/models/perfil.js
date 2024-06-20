const db = require('../models/base')
const { DataTypes } = require("sequelize");

const Perfil = db.define(
    "usuario",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
    },

    {
        tableName: "usuario"

    }
);

module.exports = Perfil;