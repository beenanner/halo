'use strict';
var express = require('express');
var fs      = require('fs');
var path    = require('path');
var nconf   = require('nconf');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  console.log(nconf.get('dir'));
  fs.readdir(path.join(process.cwd(), nconf.get('dir')), function(err, files){
    res.render('list', { title: 'List of HARs', files: files });
  });
});

module.exports = router;
