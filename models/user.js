const { Schema, model } = require("mongoose")

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "name is mandatory"],
  },
  email: {
    type: String,
    required: [true, "email is mandatory"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["USER_ROLE", "ADMIN_ROLE"],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: true,
  },
})

UserSchema.methods.toJSON = function () {
  const { password, __v, ...user } = this.toObject()
  return user
}

module.exports = model("User", UserSchema)
