/* express.js */

// импорт express
var express = require('express')
// импорт body-parser
var bodyParser = require('body-parser');
// инициализация express-приложения
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// создание функции слушателя для GET-запросов по адресу "/"
app.get('/', function (req, res) {
  res.send('Hello World')
})

// создание функции слушателя для POST-запросов по адресу "/test"
app.post('/test', function (req, res) {
  res.send('Hello World POST')
})

// включение сервера
app.listen(3000)