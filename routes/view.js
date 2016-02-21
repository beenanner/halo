var express = require('express');
var fs      = require('fs');
var path    = require('path');
var router = express.Router();

router.get('/', function (req, res, next) {
  //fs.readFile('/public/uploads/'+req.query.har, 'utf8', function (err,data) {
    var filePath = path.join(__dirname, '../public/uploads/' + req.query.har);

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err){
          var data = JSON.parse(data);
          res.render('view', { title: 'HAR Waterfall', harData: JSON.stringify(data.log) });
        }else{
            console.log(err);
        }

    });

  //});
})

module.exports = router;
