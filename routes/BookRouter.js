const Router = require('express').Router()
const controller = require('../controllers/BookController')


Router.get('/all_books', controller.GetBooks)
Router.get('/:book_id', controller.GetBookById)
Router.post('/created_books', controller.CreateBook)
Router.delete('/:book_id', controller.DeleteBook)
Router.put('/:book_id', controller.UpdateBook)
module.exports = Router