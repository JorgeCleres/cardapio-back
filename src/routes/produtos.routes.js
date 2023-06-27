const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const produtosController = require('../controllers/produtos.controller');

router.get('/produtos', produtosController.allProducts);

router.post('/pedido', produtosController.pedidoProducts);

module.exports = router;
