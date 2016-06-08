var express = require('express');
var fs      = require('fs');
var nconf   = require('nconf');
var path    = require('path');
var router = express.Router();
var jsdom = require('node-jsdom');
var perfCasc = fs.readFileSync("node_modules/perf-cascade/src/dist/perf-cascade.js", "utf-8");


router.get('/', function (req, res, next) {
  //fs.readFile('/public/uploads/'+req.query.har, 'utf8', function (err,data) {
    var filePath = path.join(process.cwd(), nconf.get('dir') + req.query.har);
    var result;
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err){
          var data = JSON.parse(data);
          // Print all of the news items on Hacker News
          console.log(perfCasc);
          jsdom.env({
            html: '<script>var data=' + data + ';</script><div id="output"></div>',
            scripts: [perfCasc],
            done: function (errors, window) {
              var test = window.document.getElementById('output');
                result = test.outerHTML;
              res.render('view', { title: 'HAR Waterfall', harData: result });
            }
          });
        }else{
            console.log(err);
        }

    });

  //});
})

module.exports = router;
