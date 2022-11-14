'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameTable('bookLists', 'booklists')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameTable('booklists', 'bookLists')
  }
}
