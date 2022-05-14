const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')
<<<<<<< HEAD
const validaUsuario = require('../middleware/validaUsuario')

router.get('/:id/detalhe', validaUsuario, produtosController.detalheProduto)
=======
const validaUsuarioLogado = require('../middleware/validaUsuarioLogado')

router.get('/:id/detalhe', validaUsuarioLogado, produtosController.detalheProduto)
>>>>>>> main
router.post('/novo', produtosController.novoProduto)

module.exports = router