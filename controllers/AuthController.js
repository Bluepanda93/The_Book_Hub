const { Username } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  console.log(req.body)
  try {
    const user = await Username.findOne({
      where: { email: req.body.email },
      raw: true
    })
    console.log(user)
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await Username.create({
      email,
      password: passwordDigest,
      name
    })
    console.log(user)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await Username.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(user.dataValues.password, oldPassword))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const GetUsers = async (req, res) => {
  try {
    const allUsers = await Username.findAll({ order: [['createdAt', 'DESC']] })
    res.send(allUsers)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req, res) => {
  try {
    const oneUser = await Username.findByPk(req.params.user_id)
    res.send(oneUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession,
  GetUsers,
  GetOneUser
}
