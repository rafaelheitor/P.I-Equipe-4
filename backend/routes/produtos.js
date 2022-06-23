const express = require("express")
const router = express()
const produtosController = require("../controller/produtosController")
const {
  oUsuarioEstaLogado,
  verificaPrivilegios,
} = require("../middleware/auth")

router.get("/", produtosController.todosProdutos)
router.get("/detalhe/:id", produtosController.detalheProduto)
router.post(
  "/novo",
  oUsuarioEstaLogado,
  verificaPrivilegios,
  produtosController.novoProduto
)
router.delete(
  "/deletar/:id",
  oUsuarioEstaLogado,
  verificaPrivilegios,
  produtosController.deletaProduto
)

module.exports = router
