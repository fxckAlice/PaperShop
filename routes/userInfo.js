var express = require('express');
var router = express.Router();
var info = require('../components/info');

router.get('/', function (req, res, next) {
    res.json(info).status(200)
})

module.exports = router