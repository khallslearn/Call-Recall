const express = require('express')
const app = express()
const cors = require("cors")
const MongoClient = require('mongodb').MongoClient
require('dotenv').config

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})