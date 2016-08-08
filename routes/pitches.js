var express = require('express');
var router = express.Router();
var Pitch = require('../models/pitch');

router.get('/', (req, res) => {
  Pitch.find({}, (err, pitchs) => {
    res.status(err ? 400 : 200).send(err || pitchs);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  Pitch.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/likes/:id')
    .put((req, res) => {
      Pitch.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, pitch) => {
          res.status(err ? 400 : 200).send(err || pitch);
      });
  });

router.route('/dislikes/:id')
    .put((req, res) => {
      Pitch.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, pitch) => {
          res.status(err ? 400 : 200).send(err || pitch);
      });
  });

module.exports = router;