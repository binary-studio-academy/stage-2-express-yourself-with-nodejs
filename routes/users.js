var express = require('express');
var router = express.Router();

const { saveName } = require("../services/user.service");
const { isAuthorized } = require("../middlewares/auth.middleware");

router.get('/', function(req, res, next) {
  res.send(`Welcome!`);
});

router.post('/', isAuthorized, function(req, res, next) {
  const result = saveName(req.body);

  if (result) {
    res.send(`Your name is ${result}`);
  } else {
    res.status(400).send(`Some error`);
  }
});

module.exports = router;
