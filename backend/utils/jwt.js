const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config/config.env' })

//Criar enviar e salvar no cookie
const enviarToken = (usuario, statusCode, res) => {
  // criar jwt token
  const getToken = () => {
    return jwt.sign({ usuario: usuario }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    })
  }

  let token = getToken()
  // opções para o cookie
  const opcoes = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  }

  res.status(statusCode).cookie('token', token, opcoes).json({
    success: true,
    usuario,
  })
}

module.exports = enviarToken
