const {Router} = require('express')
const axios = require('axios')
const {getEmpresa, createUser} = require('../controllers/controller')

const router = Router()
const info1 = []
router.get("/empresa", getEmpresa)
//router.post("/create", createUser)



module.exports = router