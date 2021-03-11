require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())

console.log('web 39 rules')
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') { //on Heroku machine, an env variable is called "NODE_ENV" --> "production"
  server.use(cors())
}