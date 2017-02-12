var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/colors', function(req, res) {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let randomNumber = Math.floor((Math.random() * 9) + 1);
  res.send({color: getRandomColor(), id: randomNumber})
});

module.exports = router;
