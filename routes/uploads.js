var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' })
var router = express.Router();

router.post('/', upload.single('har'), function (req, res, next) {
  res.render('uploaded', { title: 'HAR uploaded', file: req.file.originalname });
})

module.exports = router;
