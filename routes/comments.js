var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');
var fs = require('fs');
var path = require('path');
var memes = require('../data/memes.json');


router.get('/', function(req, res, next) {
  res.send(comments);
});

router.post('/', function(req, res, next) {

  var newComment = {
    message: req.body.message,
    imageId: req.body.imageId
  };
  comments.push(newComment);
// stringify comment
       var string = JSON.stringify(comments);
// the path the file is in
      var filePath = path.join(__dirname, '../data/comments.json');
// write the stringified version to the file
                fs.writeFile(filePath, string, function(err) {
                    if(err){

                      next(err);
                    }else{
                      // if theres no error send object back.
                      res.send(newComment);
                    }
                  });
                  });// fs write file

module.exports = router;
