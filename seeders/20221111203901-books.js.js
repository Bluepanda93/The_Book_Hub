'use strict'
// const faker = require('faker')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let books = [...Array(10)].map((_) => ({
      title: falso.randBook().title,
      author: falso.randParagraph(),
      genre: falso.randImg(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('books', books)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books')
  }
}
