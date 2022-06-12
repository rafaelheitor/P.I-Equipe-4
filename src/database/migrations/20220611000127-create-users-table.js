'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false
      },
      atributo:{
        type: Sequelize.STRING,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('users')
  },
}
