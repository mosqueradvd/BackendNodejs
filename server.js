const express = require('express')

var app = express()

app.use('/', (request, response) => {
  response.send('Hola')
})

app.listen(3000)
console.log('App is listening on port http://localhost:3000')