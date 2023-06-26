const Produtos = require('../models/produtos.model')

exports.allProducts = async(req, res) => {
    try{
        const produtos = await Produtos.find({})
        res.status(200).json({ message: 'sucCess', produtos})
    } catch {
        res.status(400).json({message: 'erro', err})
    }
}