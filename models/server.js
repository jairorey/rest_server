const express = require("express")
const cors = require("cors")
const { dbConnection } = require("../database/config.js")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8000

    this.dbConnect()

    this.middleware()
    this.routes()
  }

  async dbConnect() {
    await dbConnection()
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
      console.log("server is up in port:", this.port)
    })
  }
}

module.exports = Server
