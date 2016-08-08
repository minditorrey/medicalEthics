var express = require('express');
var router = express.Router();
var Resource = require('../models/resource');

router.get('/', (req, res) => {
  Resource.find({}, (err, resources) => {
    res.status(err ? 400 : 200).send(err || resources);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  Resource.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/likes/:id')
    .put((req, res) => {
      Resource.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, resource) => {
          res.status(err ? 400 : 200).send(err || resource);
      });
  });

router.route('/dislikes/:id')
    .put((req, res) => {
      Resource.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, resource) => {
          res.status(err ? 400 : 200).send(err || resource);
      });
  });

module.exports = router;