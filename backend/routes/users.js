var express = require('express')
var router = express.Router()
let usuariosController = require('../controller/usuariosController')
const { oUsuarioEstaLogado } = require('../middleware/auth')

router.post('/login', usuariosController.loginPost)

router.post('/registro', usuariosController.registroUser)
router.put(
  '/eu/alterarsenha',
  oUsuarioEstaLogado,
  usuariosController.atualizarSenha,
)
router.post('/eu/logout', oUsuarioEstaLogado, usuariosController.logout)

module.exports = router
