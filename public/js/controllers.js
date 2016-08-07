'use strict';

var app = angular.module('medicalethicsApp');


app.controller('homeController', function($scope) {
    console.log('homeCtrl!');

});
app.controller('postsController', function($scope, PostsService) {
    console.log('postsCtrl!');
	PostsService.getAll()
    .then(res => {
        $scope.posts = res.data;
        console.log(res.data);
        var posts = $scope.posts;
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.likeIt = (post) => {
		post.likes += 1;
		console.log('likes:', post.likes);
		PostsService.updateLikes(post)
		.then(res => {
			console.log('post.likes:', $scope.posts.likes);
			console.log(res)
		})
	}

	$scope.dislikeIt = (post) => {
		post.dislikes += 1;
		PostsService.updateDislikes(post)
		.then(res => {
			console.log('post.dislikes:', $scope.posts.dislikes);
		})
		
	}
});

app.controller('pitchesController', function($scope) {
    console.log('pitchesCtrl!');

});

app.controller('resourcesController', function($scope) {
    console.log('resourcesCtrl!');

});