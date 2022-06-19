const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')
const oUsuarioEstaLogado = require('../middleware/validaUsuarioLogado')
const verificaPrivilegios = require('../middleware/verificaPrivilegios')

router.get('/', produtosController.todosProdutos)
router.get(
  '/:id/detalhe',
  oUsuarioEstaLogado,
  produtosController.detalheProduto,
)
router.post('/novo', oUsuarioEstaLogado, produtosController.novoProduto)
router.delete(
  '/deletar/:id',
  oUsuarioEstaLogado,
  verificaPrivilegios,
  produtosController.deletaProduto,
)

module.exports = router
