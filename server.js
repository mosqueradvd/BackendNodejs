const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

var app = express()
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/message', (request, response) => {
  console.log(request.headers)
  response.header({
    'custom-header': 'Our custom header'
  })
  response.send('List of messages')
})

app.post('/message', (request, response) => {
  console.log(request.body)
  console.log(request.query)
  response.send('Message ' + request.body.text + ' successfully added')
})

// app.use('/', (request, response) => {
//   response.send('Hola')
// })

app.listen(3000)
console.log('App is listening on port http://localhost:3000')