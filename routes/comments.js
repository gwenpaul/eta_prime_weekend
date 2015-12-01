var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');
var fs = require('fs');
var path = require('path');
var memes = require('../data/memes.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(comments);
});

router.post('/', function(req, res, next) {

  var newComment = {
    message: req.body.message,
    imageId: req.body.imageId
  };
  comments.push(newComment);
// stringify comment so that it will write to array correctly
       var string = JSON.stringify(comments);
// the path the file is in
      var filePath = path.join(__dirname, '../data/comments.json');
// write the stringified version to the file
                fs.writeFile(filePath, string, function(err) {
                    if(err){
                      // if there is an error, yo i'll solve it, check out my hook while my dj revolves it
                      next(err);
                    }else{
                      // if all good, send object back.
                      res.send(newComment);
                    }
                  });
                  });// fs write file

module.exports = router;
