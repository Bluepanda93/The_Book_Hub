const Router = require('express').Router()
const controller = require('../controllers/BookController')


Router.get('/all_books', controller.GetBooks)
Router.get('/:book_id', controller.GetBookById)
Router.post('/created_books', controller.CreateBook)
module.exports = Router