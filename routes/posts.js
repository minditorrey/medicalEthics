var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(err ? 400 : 200).send(err || posts);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  Post.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(err ? 400 : 200).send(err || posts);
  });
});

router.route('/:id')
  .put((req, res) => {
    Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, post) => {
      res.status(err ? 400 : 200).send(err || post);
    })
  })
  .delete((req, res) => {
    var post = (req.body)
    Post.findByIdAndRemove(req.params.id, (err, post) => {
      res.status(err ? 400 : 200).send(err);
    })

  })

  .get((req, res) => {
    Post.findById(req.params.id, function (err, post) {
    res.status(err ? 400 : 200).send(err || post);
    console.log('post:', post);
  });
});





router.post('/', (req, res) => {
	console.log(req.body);
  Post.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/details/:id')
  .post((req, res) => {
	  console.log('details/id: req.body:', req.body)
    Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, post) => {
      res.status(err ? 400 : 200).send(err || post);
    })
  })

router.route('/users/:username')
	.get((req, res) => {
		console.log(req.params.username)
		Post
		.find({username: req.params.username})
		.exec((err, posts) => {
			console.log(posts)
			res.status(err ? 400 : 200).send(err || posts);
		})
	})

module.exports = router;