const { Books, booklist } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetBooks = async (req, res) => {
  try {
    const allBooks = await Books.findAll({ order: [['createdAt', 'DESC']] })
    res.send(allBooks)
  } catch (error) {
    throw error
  }
}

const GetBookById = async (req, res) => {
  try {
    const bookById = await Books.findByPk(req.params.book_id)
    res.send(bookById)
  } catch (error) {
    throw error
  }
}

const CreateBook = async (req, res) => {
  try {
    const post = await Books.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeleteBook = async (req, res) => {
  console.log(req.body)
  try {
    let bookId = parseInt(req.params.book_id)
    await Books.destroy({ where: { id: bookId } })
    res.send({ message: 'Book Deleted' })
  } catch (error) {
    throw error
  }
}

const UpdateBook = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id)
    let updatedBook = await Books.update(req.body, {
      where: { id: bookId },
      returning: true
    })
    res.send(updatedBook)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetBooks,
  GetBookById,
  CreateBook,
  DeleteBook,
  UpdateBook
}
