const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')
const validaUsuario = require('../middleware/validaUsuario')

router.get('/:id/detalhe', validaUsuario, produtosController.detalheProduto)
router.post('/novo', produtosController.novoProduto)

module.exports = router