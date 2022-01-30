const express = require("express")

const registros = require('../controllers/Registros')
const listagens = require('../controllers/Listagens')
const update = require('../controllers/Update')
const login = require('../controllers/Login')

const router = express.Router()

// Rota default da aplicação
router.get('/', (req, res)=> res.status(200).json({ message: 'Você esta na rota default da API.' }))

// Rotas para registro de Cliente, Colaborador e Ordem de serviços
router.post('/registrocliente', registros.novoCliente )
router.post('/registrocolaborador', registros.novoColaborador )
router.post('/registroordem', registros.novaOrdem )

// Rotas para listagem de Cliente, Colaboraor e Ordens de serviços
router.get('/clientes', listagens.clientes)
router.get('/colaboradores', listagens.colaboradores)
router.get('/ordens', listagens.ordens)

// Rota para os dados do painel
router.get('/dadospainel', listagens.dadosPainel)
router.get('/mapapainel', listagens.mapaPainel)

// Rota de login
router.post('/login', login.login)

// Rota de Update de Ordem de serviços
router.put('/ordem', update.updateOrdem )


module.exports = router