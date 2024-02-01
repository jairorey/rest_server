const {response} = require("express")

const userGet = (req, res = response) => {
    res.json({
        msg:"get done"
    })
}
const userPost = (req, res = response) => {
    const {nombre, email} = req.body
    res.json({
        msg:"post done",
        nombre,
        email
    })
}
const userPut = (req, res = response) => {
    const {id} = req.params
    res.json({
        msg:"put done",
        id
    })
}
const userDelete = (req, res = response) => {
    res.json({
        msg:"delete done"
    })
}
const userPatch = (req, res = response) => {
    res.json({
        msg:"patch done"
    })
}

module.exports = {
    userGet,
    userPost,
    userDelete,
    userPut,
    userPatch
}