const Cliente = require('../models/cliente')
const Colaborador = require('../models/colaborador')
const Ordem = require('../models/ordem')
const database = require('../config/db')

exports.novoCliente = async (req, res) => {

    const nomeCliente = req.body.nome

    try {

        const registroCliente = await Cliente.create({
            nome: nomeCliente
        })
        res.status(200).json({ sucess: true, message: 'cliente registrado'})

    } catch (error) {
        res.status(500).json({ sucess: false, message: 'erro ao registrar cliente' })
    }
}

exports.novoColaborador = async (req, res) => {

    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const perfil = req.body.perfil
    const autor = req.body.autor

    try {

        const registroColaborador = await Colaborador.create({
            nome: nome,
            email: email,
            senha: senha,
            perfil: perfil

        })
        res.status(200).json({ sucess: true, message: 'colaborador registrado'})

    } catch (error) {
        res.status(500).json({ sucess: false, message: 'erro ao registrar colaborador' })
    }
}

exports.novaOrdem = async (req, res) => {
   
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    const colaborador = req.body.colaborador
    const cliente = req.body.cliente
    const status = req.body.status
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const autor = req.body.usuario

    try {
        const registroOrdem = await Ordem.create({
            titulo: titulo,
            descricao: descricao,
            colaborador: colaborador,
            cliente: cliente,
            status: status,
            latitude: latitude,
            longitude: longitude,
            autor: autor
        })
        res.status(200).json({ sucess: true, message: 'ordem registrada' })

    } catch (error) {
        res.status(500).json({ sucess: false, message: 'erro ao registrar ordem' })
    }

}