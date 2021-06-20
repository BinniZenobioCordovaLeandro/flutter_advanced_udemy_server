const express = require('express')
const path = require('path')
require('dotenv').config()

// AP de Express
const app = express()

// node server
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)
require('./sockets/socket')

// path publico
const publicPath = path.resolve(__dirname, 'public')

// request
app.use(express.static(publicPath))

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err)
  console.log('Example app listening on port', process.env.PORT)
})
