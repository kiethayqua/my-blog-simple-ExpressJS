var express = require('express');
var router = express.Router();
var postController = require('../controllers/post.controller');

router.get('/', postController.index);
router.post('/', postController.postIndex);

module.exports = router;