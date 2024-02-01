const { Router } = require("express")
const { userGet, userPost, userDelete, userPatch, userPut } = require("../controllers/user_controller")

const user_router = Router()

user_router.get("/", userGet)

user_router.post("/", userPost)

user_router.put("/", userPut)

user_router.delete("/", userDelete)

user_router.put("/:id", userPut)

user_router.patch("/", userPatch) 

module.exports = user_router
