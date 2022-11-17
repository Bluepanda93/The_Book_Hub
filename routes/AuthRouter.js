const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')
// const controller = require('../controllers/UserController')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.post(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

router.get('/allusers', controller.GetUsers)
router.get('/:user_id', controller.GetOneUser)

module.exports = router
