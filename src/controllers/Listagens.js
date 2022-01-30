const Cliente = require('../models/cliente')
const Colaborador = require('../models/colaborador')
const Ordem = require('../models/ordem')
const database = require('../config/db')

exports.clientes = async (req, res) => {

    try {
        const clientes = await Cliente.findAll()
        res.status(200).json(clientes)

    } catch (error) {
        throw error
    }
}

exports.colaboradores = async (req, res) => {

    try {
        const colaboradores = await Colaborador.findAll()
        res.status(200).json(colaboradores)

    } catch (error) {
        throw error
    }
}

exports.ordens = async (req, res) => {

    try {
        const ordens = await Ordem.sequelize.query(
        `SELECT
            id,
            titulo,
            descricao,
            cliente,
            colaborador,
            status,
            latitude,
            longitude,
            STRFTIME('%d/%m/%Y', createdAt) AS data,
            autor
        FROM ordems AS ordem`, { type: database.Sequelize.QueryTypes.SELECT })

        res.status(200).json(ordens)

    } catch (error) {
        throw error
    }

}

exports.dadosPainel = async (req, res) => {

    try {
        const dadosPainel = await Ordem.sequelize.query(
            `SELECT 
                STRFTIME('%d', createdAt) as dia, 
                COUNT(*) as qtde
            FROM ordems
            where STRFTIME('%m/%Y', createdAt) = STRFTIME('%m/%Y', date('now'))
            group by dia`, { type: database.Sequelize.QueryTypes.SELECT })
        
        res.status(200).json(dadosPainel)

    } catch (error) {
        throw error
    }
}

exports.mapaPainel = async (req, res) => {

    try {
        const mapaPainel = await Ordem.sequelize.query(
            `SELECT
                colaborador,
                latitude,
                longitude,
                MAX(createdAt)
            FROM ordems GROUP BY colaborador`, { type: database.Sequelize.QueryTypes.SELECT })
        
        res.status(200).json(mapaPainel)

    } catch (error) {
        throw error
    }
}


