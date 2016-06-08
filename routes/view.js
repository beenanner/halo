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
          var jsdom = require("node-jsdom").jsdom;
          var window = jsdom().parentWindow;

          window.__myObject = { foo: "bar" };
          var divEl = window.document.createElement("div")
          divEl.id = "output";
          window.document.body.appendChild(divEl);
          var dataScriptEl = window.document.createElement("script");
          dataScriptEl.innerHTML = "var harData = " + JSON.stringify(data) + ";"
          window.document.body.appendChild(dataScriptEl);
          var scriptEl = window.document.createElement("script");
          scriptEl.innerHTML = perfCasc;
          window.document.body.appendChild(scriptEl);
          var myScript = window.document.createElement("script");
          myScript.innerHTML = "var options = {rowHeight: 23, showAlignmentHelpers : true, showIndicatorIcons: true, leftColumnWith: 25};var perfCascadeSvg =  perfCascade.fromHar(harData.log, options)";
          window.document.body.appendChild(myScript);
          var test = window.document.getElementById('output');
          result = window.document.body.innerHTML;
          res.render('view', { title: 'HAR Waterfall', harData: result });
        }else{
            console.log(err);
        }

    });

  //});
})

module.exports = router;
