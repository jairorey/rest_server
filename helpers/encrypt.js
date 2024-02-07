const bcryptjs = require("bcryptjs")

const encrypt = (val) => {
  const salt = bcryptjs.genSaltSync()
  return bcryptjs.hashSync(val, salt)
}

module.exports = {
  encrypt,
}
