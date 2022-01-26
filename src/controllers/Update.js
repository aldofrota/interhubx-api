const Ordem = require('../models/ordem')

exports.updateOrdem = async (req, res) => {
   
    const ordemId = req.body.id
    const ordemStatus = req.body.status

    try {
        const updadteOrdem = await Ordem.findByPk(ordemId)
  
        updadteOrdem.status = ordemStatus

        const saveOrdem = await updadteOrdem.save()

        res.status(200).json({ sucess: true, message: 'ordem atualizada' })
    } catch (error) {
        throw error
    }

}