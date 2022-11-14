'use strict'
const { Model } = require('sequelize')
// const username = require('./username')
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.belongsToMany(models.Username, {
        foreignKey: 'userId',
        through: models.Booklist
      })
    }
  }
  Books.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Books',
      tableName: 'books'
    }
  )
  return Books
}
