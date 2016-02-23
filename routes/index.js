var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/name', function(req, res, next) {
  res.render('name', { name: req.query.name });
});
router.get('/plus', function(req, res, next) {
  res.json( { x: parseInt(req.query.x, 10)+1 });
});

module.exports = router;
