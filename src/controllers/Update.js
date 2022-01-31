const Ordem = require('../models/ordem')

exports.updateOrdem = async (req, res) => {
   
    const ordemId = req.body.id
    const ordemStatus = req.body.status

    console.log(ordemId)
    console.log(ordemStatus)

    try {
        const ordem = await Ordem.findByPk(ordemId)
  
        ordem.status = ordemStatus

        const saveOrdem = await ordem.save()

        res.status(200).json({ sucess: true, message: 'ordem atualizada' })
    } catch (error) {
        res.status(400).json({ sucess: false, message: 'ordem não atualizada' })
    }

}