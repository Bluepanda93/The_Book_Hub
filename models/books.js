'use strict'
const { Model } = require('sequelize')
const username = require('./username')
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.belongsTo(models.booklist, {
        as: 'singleBook',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      books.hasMany(models.username, {
        as: 'username',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  books.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'books',
      tableName: 'books'
    }
  )
  return books
}
