var express = require('express')
var router = express.Router()
let usuariosController = require('../controller/usuariosController')
const validaUsuarioLogado = require('../middleware/validaUsuarioLogado')

/* GET users listing. */

router.post('/login', usuariosController.loginPost)

router.post('/registro', usuariosController.registroUser)
router.put(
  '/eu/alterarsenha',
  validaUsuarioLogado,
  usuariosController.atualizarSenha,
)
router.post('/eu/logout', validaUsuarioLogado, usuariosController.logout)

module.exports = router
