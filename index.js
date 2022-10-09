const express = require('express')
const morgan = require('morgan')
const usuarioRouter = require('./src/router/router')
const app = express()
const { db} = require('./src/db.js');
const cors = require('cors')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3001

app.listen(port,() =>{
    console.log("server on port 3001")
    db.sync({force:false});  // {force:false}
})


app.use(usuarioRouter)

