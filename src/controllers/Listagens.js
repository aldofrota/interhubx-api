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
        const ordens = await Ordem.findAll()
        res.status(200).json(ordens)

    } catch (error) {
        throw error
    }

}