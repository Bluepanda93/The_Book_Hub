const Router = require('express').Router()
const controller = require('../controllers/BookController')


Router.get('/all_books', controller.GetBooks)


module.exports = Router