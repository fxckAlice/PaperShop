var express = require('express');
var router = express.Router();
var dbRepo = require("../components/db");

/* GET home page. */
router.get('/cat', function(req, res, next) {
    dbRepo.getCategories()
        .then(categories => res.json(categories))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
