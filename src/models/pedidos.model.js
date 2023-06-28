const mongoose = require('mongoose')

const newSchema = mongoose.Schema

const pedidoSchema = newSchema({
    pedido:[{
        id: {type: Number, maxLenght: 100},
        nome: {type: String, maxLenght: 50},
        preco: {type: Number, maxLenght: 50},
        quantidade: {type: Number, maxLenght: 50}
    }]
}, {
    timestamps: true,
})

const Pedido = mongoose.model('pedido', pedidoSchema)

module.exports = Pedido