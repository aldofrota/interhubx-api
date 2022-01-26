const Sequelize = require('sequelize');
const database = require('../config/db');
 
const Colaborador = database.define('colaborador', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    perfil: {
        type: Sequelize.STRING
    }
})
 
module.exports = Colaborador;