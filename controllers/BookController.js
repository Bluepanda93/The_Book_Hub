const { books, booklist } = require('../models')
const { Op, literal, fn, col } = require('sequelize')


const GetBooks = async (req, res) => {
    try {
        const allBooks = await books.findAll({ order: [['created_at', 'DESC']] })
        res.send(allBooks)
    }
    catch (error) {
        throw error
    }
}

module.exports = {
    GetBooks
}