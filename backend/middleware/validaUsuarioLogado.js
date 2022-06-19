const ManipuladorDeErros = require('../utils/ManipuladorDeErros')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')
const capturarErrosAsync = require('./capturarErrosAsync')

const oUsuarioEstaLogado = capturarErrosAsync(async (req, res, next) => {
  const { token } = req.cookies

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
  console.log(req.usuario)
  next()
})

module.exports = oUsuarioEstaLogado
