var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var checkogin = require('../commons/auth');
const users = [
  {id:1, username: 'a', password: '123'},
  {id:2, username: 'b', password: '123'},
]

/* GET home page. */
router.get('/', checkogin.check, function(req, res, next) {
  res.redirect('/listSP')
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  // res.redirect('/listSP')
  //nếu login rồi => tự chuyển qua list SP
  // nếu chưa login
  res.render('login');
  
});

/* POST login page. */
router.post('/login', function(req, res, next) {
  let {username, password} = req.body;
  let user  = users.find(us => us.username == username && us.password == password);
  console.log(user);
  if (user) {
    let token = jwt.sign({user}, process.env.JWT_KEY);
    req.session.token = token;
    res.redirect('/listSP')
  } else {
  }
});

/* GET logout. */
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/login')  
  })
});

module.exports = router;
