var express = require('express');
var ToyModel = require('../models/ToyModel');
var router = express.Router();
var CategoryModel = require('../models/CategoryModel');

/* GET users listing. */
router.get('/', async(req, res) => {
  var ToyModel = await ToyModel.find({}).populate('category');
  res.render('toy/index', { toys });
})

module.exports = router;
