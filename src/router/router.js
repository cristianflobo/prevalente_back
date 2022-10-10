const {Router} = require('express')
const axios = require('axios')
const {getEmpresa, edit} = require('../controllers/controller')

const router = Router()
const info1 = []
router.get("/empresa", getEmpresa)
router.put("/edit", edit)



module.exports = router