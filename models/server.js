const express = require("express")
const cors = require("cors")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8000
    this.middleware()
    this.routes()
  }

  routes() {
    this.app.use("/api/users", require("../routes/user.js"))
  }

  middleware() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static("public"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor up en port:", this.port)
    })
  }
}

module.exports = Server
