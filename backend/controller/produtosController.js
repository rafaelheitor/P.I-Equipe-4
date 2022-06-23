const Produto = require("../models/Produto")
const capturarErrosAsync = require("../middleware/capturarErrosAsync")

const produtosController = {
  todosProdutos: capturarErrosAsync(async (req, res) => {
    const listaDeProdutos = await Produto.findAll()
    res.send(listaDeProdutos)
  }),

  novoProduto: capturarErrosAsync(async (req, res, next) => {
    let { nome, descricao, valor, categoria, imagem_produto, estoque } =
      req.body

    const produto = await Produto.create({
      nome,
      descricao,
      valor,
      categoria,
      imagem_produto,
      estoque,
    })

    res.status(200).json({
      success: true,
      produto,
    })
  }),
  detalheProduto: async (req, res) => {
    let { id } = req.params
    let produto = await Produto.findByPk(id)

    res.render("detalhe", { produto: produto })
  },
  deletaProduto: async (req, res) => {
    let { id } = req.params
    let produto = await Produto.destroy({
      where: {
        id,
      },
    })
    res.send("Produto deletado")
  },
}

module.exports = produtosController
