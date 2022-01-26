const express = require("express")

const registros = require('../controllers/Registros')
const listagens = require('../controllers/Listagens')

const router = express.Router()

// Rota default da aplicação
router.get('/', (req, res)=> res.status(200).json({ message: 'Você esta na roda default da API.' }))

// Rotas para registro de Cliente, Colaborador e Ordem de serviços
router.post('/registrocliente', registros.novoCliente )
router.post('/registrocolaborador', registros.novoColaborador )
router.post('/registroordem', registros.novaOrdem )

// Rotas para listagem de Cliente, Colaboraor e Ordens de serviços
router.get('/clientes', listagens.clientes)
router.get('/colaboradores', listagens.colaboradores)
router.get('/ordens', listagens.ordens)


module.exports = router