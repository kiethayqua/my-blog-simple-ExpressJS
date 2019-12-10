var express = require('express');
var router = express.Router();
var articlesController = require('../controllers/articles.controller');

router.get('/:id', articlesController.view);

module.exports = router;