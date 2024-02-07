const { response } = require("express")

const User = require("../models/user")
const { encrypt } = require("../helpers/encrypt")
const { checkEmail } = require("../helpers/db_validator")

const userGet = async (req = request, res = response) => {
  const { limit = 10, from = 0 } = req.query
  const [total, users] = await Promise.all([
    User.countDocuments({ state: true }),
    User.find({ state: true }).limit(Number(limit)).skip(Number(from)),
  ])
  res.json({
    total,
    users,
  })
}
const userPost = async (req, res = response) => {
  const { name, email, password, img, role, state } = req.body
  const user = new User({ name, email, password, img, role, state })

  // encrypt password
  user.password = encrypt(password)

  await user.save()
  res.json({
    msg: "post done",
    user,
  })
}
const userPut = async (req, res = response) => {
  const { id } = req.params
  const { password, google, email, ...rest } = req.body
  if (password) {
    rest.password = encrypt(password)
  }

  const user = await User.findByIdAndUpdate(id, rest)

  res.json({
    msg: "put done",
    user,
  })
}
const userDelete = async (req, res = response) => {
  const { id } = req.params
  const user = await User.findByIdAndUpdate(id, { state: false })
  res.json({
    user,
  })
}
module.exports = {
  userGet,
  userPost,
  userDelete,
  userPut,
}
