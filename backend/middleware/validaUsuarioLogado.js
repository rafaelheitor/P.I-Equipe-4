const ManipuladorDeErros = require('../utils/ManipuladorDeErros')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')
const capturarErrosAsync = require('./capturarErrosAsync')

const oUsuarioEstaLogado = capturarErrosAsync(async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-type, Accept',
  )
  const getToken = (req) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    return token
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

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  req.user = await Usuario.findByPk(decoded.id)
  console.log(decoded)
  next()
})

module.exports = oUsuarioEstaLogado
