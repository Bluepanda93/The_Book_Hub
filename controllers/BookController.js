const { Books, booklist } = require('../models')
const { Op, literal, fn, col } = require('sequelize')


const GetBooks = async (req, res) => {
    try {
        const allBooks = await Books.findAll({ order: [['createdAt', 'DESC']] })
        res.send(allBooks)
    }
    catch (error) {
        throw error
    }
}

module.exports = {
    GetBooks
}
