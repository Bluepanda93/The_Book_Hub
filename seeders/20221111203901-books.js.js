'use strict'
// const faker = require('faker')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let books = [...Array(5)].map((_) => ({
      title: falso.randBook().title,
      body: falso.randParagraph(),
      image: falso.randImg(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('books', books)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books')
  }
}
