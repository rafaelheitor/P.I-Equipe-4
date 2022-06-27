const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const capturarErrosAsync = require('../middleware/capturarErrosAsync')
const ManipuladorDeErros = require('../utils/ManipuladorDeErros')
const enviarToken = require('../utils/jwt')

const usuariosController = {
  loginPost: capturarErrosAsync(async (req, res, next) => {
    let { email, senha } = req.body
    if (!email || !senha) {
      return next(
        new ManipuladorDeErros('Por favor, digite o email e a senha', 400),
      )
    }

    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    })
    if (!usuario) {
      return next(new ManipuladorDeErros('Email ou senha inválidos', 400))
    }

    let aSenhaCombina = await bcrypt.compare(senha, usuario.senha)
    if (aSenhaCombina) {
      const resposta = {
        nome: usuario.nome,
        email: usuario.email,
      }

      enviarToken(resposta, 200, res)
    }
    if (!aSenhaCombina) {
      return next(new ManipuladorDeErros('Email ou senha inválidos', 400))
    }
  }),
  registroUser: capturarErrosAsync(async (req, res, next) => {
    let { email, senha, nome, atributo } = req.body
    let oUsuarioJaExiste = await Usuario.findOne({
      where: {
        email,
      },
    })
    if (!oUsuarioJaExiste) {
      const usuario = await Usuario.create({
        email,
        senha,
        nome,
        atributo,
      })
      const resposta = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        atributo: usuario.atributo,
      }

      enviarToken(resposta, 200, res)
    } else {
      return next(
        new ManipuladorDeErros(
          'Já existe uma conta cadastrada para este email.',
          401,
        ),
      )
    }
  }),
  atualizarSenha: capturarErrosAsync(async (req, res, next) => {
    let { senhaAtual, novaSenha } = req.body
    const { usuario } = req

    const aSenhaCombina = await bcrypt.compare(senhaAtual, usuario.senha)
    if (!aSenhaCombina) {
      res.send('Senha atual incorreta!')
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10)
    await Usuario.update(
      {
        senha: novaSenhaHash,
      },
      {
        where: {
          id: usuario.id,
        },
      },
    )

    res.status(200).json({
      success: true,
      message: 'Senha atualizado com sucesso',
    })
  }),

  logout: capturarErrosAsync(async (req, res, next) => {
    res.cookie('token', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })

    res.status(200).json({
      success: true,
      message: 'Logout executado com sucesso',
    })
  }),
}

module.exports = usuariosController
