var express = require('express');
var router = express.Router();
let usuariosController = require('../controller/usuariosController')
const validaUsuarioLogado = require('../middleware/validaUsuarioLogado')

/* GET users listing. */

//Tela de Login
router.get('/login', usuariosController.login)
router.post('/login', usuariosController.loginPost)

//Tela de Registro

router.get('/registro', usuariosController.registro)
router.post('/registro', usuariosController.registroUser)
router.put('/eu/alterarsenha', validaUsuarioLogado, usuariosController.atualizarSenha)
router.post('/eu/logout', validaUsuarioLogado, usuariosController.logout)

router.get('/pagamento', usuariosController.pagamento)



module.exports = router;
