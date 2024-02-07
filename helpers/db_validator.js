const User = require("../models/user")
const Role = require("../models/role")

const checkRole = async (role = "") => {
  const existRole = await Role.findOne({ role })
  if (!existRole) {
    throw new Error(`Role ${role} does not exist in db`)
  }
}

const checkEmail = async (email = "") => {
  const existEmail = await User.findOne({ email })
  if (existEmail) {
    throw new Error(`Email ${email} already exist in db`)
  }
}
const checkId = async (id = "") => {
  const existId = await User.findOne({ _id: id })
  if (!existId) {
    throw new Error(`Id ${id} does not exist in db`)
  }
}

module.exports = {
  checkRole,
  checkEmail,
  checkId,
}
