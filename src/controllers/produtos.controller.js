const Produtos = require('../models/produtos.model')
const Pedido = require('../models/pedidos.model')
const nodemailer = require('../services/nodemailer')

exports.allProducts = async(req, res) => {
    try{
        const produtos = await Produtos.find({})
        res.status(200).json({ message: 'sucCess', produtos})
    } catch {
        res.status(400).json({message: 'erro', err})
    }
}

exports.pedidoProducts = async(req, res) => {
    try{
        const pedido = new Pedido(req.body)
        await pedido.save();
        await nodemailer.SendEmail(req.body)
            .then(() => {
                res.status(200).json({ message: 'success'})
            })
            .catch(() => {
                res.status(400).json({message: 'erro'})
            })
    } catch {
        res.status(400).json({message: 'erro'})
    }
}