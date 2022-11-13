const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001
// const config = require(__dirname + '/../config/config.js')[env]

app.use(cors())
app.use(logger('dev'))
// app.use(bodyParser.json())

// app.use('/auth', AuthRouter)
// app.use('/posts', PostRouter)
app.get('/', (req, res) => res.json({ message: 'server works' }))

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
