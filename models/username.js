'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Username extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Username.belongsToMany(models.Books, {
        foreignKey: 'userId',
        through: models.Booklist
      })
    }
  }
  Username.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Username',
      tableName: 'usernames'
    }
  )
  return Username
}
