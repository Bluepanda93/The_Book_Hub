'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('books', 'auther', 'author')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('books', 'author', 'auther')
  }
}
