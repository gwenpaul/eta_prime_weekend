var express = require('express');
var router = express.Router();
var path = require('path');
var memes = require('../data/memes.json');
var comments = require('../data/comments.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('memes',{title: 'memes', memes: memes});
});

module.exports = router;
