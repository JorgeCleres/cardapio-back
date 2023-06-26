const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const produtosController = require('../controllers/produtos.controller');

router.get('/produtos', produtosController.allProducts);

module.exports = router;
