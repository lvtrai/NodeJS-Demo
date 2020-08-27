const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config
var port = process.env.PORT || 3000

const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.json({ info: 'API Node JS' })
})


app.get('/products', db.getAll)
app.get('/casi', db.getAllCaSi)


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)