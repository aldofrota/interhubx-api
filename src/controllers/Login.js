const Colaborador = require('../models/Colaborador')

exports.login = async (req, res) => {

    const email = req.body.email
    const senha = req.body.senha

    try {
        const usuario = await Colaborador.findOne({ where: { email: email } });

        if (usuario === null) {
            res.status(401).send({ error: 'Email ou senha incorreto' })
        } else if (usuario.email !== email) {
            res.status(401).send({ error: 'Email ou senha incorreto' })
        }
        if (usuario.senha !== senha) {
            res.status(401).send({ error: 'Email ou senha incorreto' })
        }
        res.status(200).json({
            sucess: true,
            message: 'Ususario logado com sucesso',
            usuario: usuario.nome,
            perfil: usuario.perfil})
    }
    catch (error) {
        console.log(error)
    }
}