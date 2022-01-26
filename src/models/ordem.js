const Sequelize = require('sequelize');
const database = require('../config/db');
 
const Ordem = database.define('ordem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING
    },
    colaborador: {
        type: Sequelize.STRING
    },
    cliente: {
        type: Sequelize.STRING
    }
})
 
module.exports = Ordem;