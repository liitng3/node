var express = require('express');
var data = require('../data.json');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/list', function(req, res, next) {
  if(data.users[0].username === req.body.username && data.users[0].password === req.body.password) {
    res.render('list',{list:data.chapterList});
  }
  else{
    res.send('用户名密码错误');
  }
  
});
module.exports = router;
