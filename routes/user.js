const { Router } = require("express")

const user_router = Router()

user_router.get("/", function (req, res) {
  res.json("Hello World GET")
})

user_router.post("/", function (req, res) {
  res.json("Hello World POST")
})

user_router.put("/", function (req, res) {
  res.json("Hello World PUT")
})

user_router.delete("/", function (req, res) {
  res.json("Hello World DELETE")
})

module.exports = user_router
