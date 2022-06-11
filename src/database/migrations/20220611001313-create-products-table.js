'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     return await queryInterface.createTable('produtos', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao:{
        type: Sequelize.STRING,
        allowNull: false
      },
      valor:{
        type: Sequelize.DECIMAL,
        allowNull:false
      },
      categoria:{
        type: Sequelize.STRING,
        allowNull: false
      },
      estoque:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imagem_produto:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  
  },

  async down (queryInterface, Sequelize) {
  
     return await queryInterface.dropTable('produtos');
    
  }
};
