const Produto = require('../models/Produto')
const produtoJson = require('../models/produtos.json')
require('../database')

const seeder = async () => {
  try {
    await Produto.destroy({
      where: {},
    })
    await Produto.bulkCreate(produtoJson)
    return 'Todos os produtos foram adicionados com sucesso!'
  } catch (error) {
    console.log(error)
    return error
  }
}

seeder()

module.exports = seeder
