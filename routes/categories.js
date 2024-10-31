var express = require('express');
var router = express.Router();
var dbrepo = require("../components/db");

function categoriesListPrint(){
    return dbrepo.getCategories()
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('categories', {
        title: 'Express',
        list: categoriesListPrint()});
});

module.exports = router;
