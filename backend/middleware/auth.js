const ManipuladorDeErros = require('../utils/ManipuladorDeErros')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')
const capturarErrosAsync = require('./capturarErrosAsync')

exports.oUsuarioEstaLogado = capturarErrosAsync(async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('x-auth-token')

  const getToken = (req) => {
    const authHeader = req.headers['x-auth-token']
    let tokenHeader = authHeader.split(' ')[1]
    let tokenSemAspas = tokenHeader.substring(1, tokenHeader.length - 1)
    return tokenSemAspas
  }

  const token = getToken(req)
  if (!token) {
    next(
      new ManipuladorDeErros(
        'Por favor, faça login para acessar esse conteúdo',
        401,
      ),
    )
  }
  next()
})

exports.verificaPrivilegios = capturarErrosAsync(async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('x-auth-token')

  const getToken = (req) => {
    const authHeader = req.headers['x-auth-token']
    let tokenHeader = authHeader.split(' ')[1]
    let tokenSemAspas = tokenHeader.substring(1, tokenHeader.length - 1)
    return tokenSemAspas
  }
  const token = getToken(req)
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const usuario = await Usuario.findByPk(decoded.id)

  if (usuario.atributo == 'admin') {
    next()
  }
  next(
    new ManipuladorDeErros(
      'Você não tem privilégios para executar esta ação',
      401,
    ),
  )
})
