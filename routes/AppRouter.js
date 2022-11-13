const Router = require('express').Router()
const BookRouter = require('./BookRouter')

Router.use('/books', BookRouter)
module.exports = Router