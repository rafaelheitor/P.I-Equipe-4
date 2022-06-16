const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Produto = require('../models/Produto')
const Usuario = require('../models/Usuario')
const sequelize = new Sequelize(dbConfig)

Produto.init(sequelize)
Usuario.init(sequelize)


module.exports = sequelize