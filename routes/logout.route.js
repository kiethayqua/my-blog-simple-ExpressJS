var express = require('express');
var router = express.Router();
var logoutController = require('../controllers/logout.controller');

router.get('/', logoutController.index);

module.exports = router;