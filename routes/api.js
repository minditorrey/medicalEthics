'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/posts', require('./posts'));
router.use('/resources', require('./resources'));
router.use('/pitches', require('./pitches'));

module.exports = router;