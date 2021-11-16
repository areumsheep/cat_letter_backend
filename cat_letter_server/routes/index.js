var express = require('express');
var router = express.Router();
var db_config = require('../config/database');
var conn = db_config.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/documents/:id', (req,res) => {
  res.json({id: req.params.id});
});

router.get('/list', function(req, res) {
  var sql = 'SELECT * FROM CAT_TITLE_TB';
  conn.query(sql, function (err, rows, fields) {
    if(err) console.log('query is not excuted. select fail...\n' + err);
    else console.log('User info is: ', rows);
  });
});

module.exports = router;
