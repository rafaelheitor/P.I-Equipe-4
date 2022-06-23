const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

class Usuario extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            atributo: DataTypes.STRING
        }, {
         hooks:{
            beforeCreate: async (usuario, options) => {
                const senhaHash = await bcrypt.hash(usuario.senha, 10)
                usuario.senha = senhaHash
            }
         },
            sequelize,
            tableName: 'usuarios',
        })
    }
}

module.exports = Usuario