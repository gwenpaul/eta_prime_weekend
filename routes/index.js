var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');
var comments = require('../data/comments.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DEGENERATOR STEVE', memes:memes, comments:comments});
});

module.exports = router;
