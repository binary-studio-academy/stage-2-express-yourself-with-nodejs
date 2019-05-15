var express = require('express');
var bodyParser = require('body-parser');
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/:route', function (req, res) {
  console.log(req.query.a);
  console.log(req.params.route);

  res.send('Hello World');
})

app.post('/user', function (req, res) {
  console.log(req.body);
  res.send('Hello World POST')
})

app.listen(3000)