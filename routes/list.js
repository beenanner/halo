'use strict';
var express = require('express');
var fs      = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readdir('public/uploads', function(err, files){
    res.render('list', { title: 'List of HARs', files: files });
  });
});

module.exports = router;
