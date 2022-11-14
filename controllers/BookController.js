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

const GetBookById = async (req, res) => {
    try {
        const bookById = await Books.findByPk(req.params.book_id)
        res.send(bookById)
    }
    catch (error) {
        throw error
    }
}

const CreateBook = async (req, res) => {
    console.log(req.body)
    try {
        const post = await Books.create({ ...req.body })
        res.send(post)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetBooks,
    GetBookById,
    CreateBook
}
