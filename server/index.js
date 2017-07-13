var express = require('express')
var bodyParser = require('body-parser')
var socket = require('socket.io')

var app = express()
var pptStatus = {}

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var server = app.listen(3000, function () {
	console.log('chat app server run at 3000')
})

var io = socket(server)

io.on('connection', function (socket) {
  console.log('connected')
  socket.emit('ppt_status', pptStatus)
  socket.on('ppt_run', function (data) {
    console.log('ppt_run: ', data)
    pptStatus = data
    socket.broadcast.emit('ppt_status', pptStatus)
  })
})
