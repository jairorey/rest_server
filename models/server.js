const express = require("express")
const cors = require("cors")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.middleware()
    this.routes()
  }

  routes() {
    this.app.use("/api/users", require("../routes/user.js"))
  }

  middleware() {
    this.app.use(cors())
    this.app.use(express.static("public"))
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("servidor up en port:", this.port)
    })
  }
}

module.exports = Server
