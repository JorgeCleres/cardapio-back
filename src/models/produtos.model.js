const mongoose = require('mongoose')

const newSchema = mongoose.Schema

const produtosSchema = newSchema({
    id: {type: Number, maxLenght: 100},
    image: {type: String, maxLenght: 150},
    nome: {type: String, maxLenght: 50},
    preco: {type: Number, maxLenght: 50},
    tipo: {type: String, maxLenght: 50},
    descricao: {type: String, maxLenght: 880}
}, {
    timestamps: true,
})

const Produtos = mongoose.model('produtos', produtosSchema)

module.exports = Produtos