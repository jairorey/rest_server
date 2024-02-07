const { Router } = require("express")
const { check } = require("express-validator")
const { dataValidator } = require("../middlewares/data_validator")
const { checkRole, checkEmail, checkId } = require("../helpers/db_validator")
const {
  userGet,
  userPost,
  userDelete,
  userPatch,
  userPut,
} = require("../controllers/user_controller")

const user_router = Router()

user_router.get("/", userGet)

user_router.post(
  "/",
  [
    check("name", "name is mandatory").not().isEmpty(),
    check("password", "password minimum characters required").isLength({
      min: 6,
    }),
    check("email", "not a valid email").isEmail(),
    check("email").custom(checkEmail),
    check("role").custom(checkRole),
    dataValidator,
  ],
  userPost
)

user_router.put(
  "/:id",
  [
    check("id", "not a valid id").isMongoId(),
    check("id").custom(checkId),
    check("password", "password minimum characters required").isLength({
      min: 6,
    }),
    check("role").custom(checkRole),
    dataValidator,
  ],
  userPut
)

user_router.delete(
  "/:id",
  [
    check("id", "not a valid id").isMongoId(),
    check("id").custom(checkId),
    dataValidator,
  ],
  userDelete
)

module.exports = user_router
