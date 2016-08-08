'use strict';

var app = angular.module('medicalethicsApp');


app.controller('homeController', function($scope) {
    console.log('homeCtrl!');

});
app.controller('postsController', function($scope, $state, $rootScope, $stateParams, PostsService) {
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

	$scope.openPostModal = function() {
        $('#postModal').modal('show');
    }

    $scope.cancelPost = function(){
        $('#postModal').modal('hide');
    }

    $scope.addPost = function() {
    	$scope.names = $('#names').val();
		$scope.chapter = $('#chapter').val();
		$scope.topic = $('#topic').val();
		$scope.type = $('#type').val();
		$scope.text = $('#text').val();

    	if($('#two').is(':checked')) {
            $scope.chapter = "2";
        } else if($('#three').is(':checked')) {
            $scope.chapter = "3";
        } else if($('#four').is(':checked')) {
            $scope.chapter = "4";
        } else if($('#five').is(':checked')) {
            $scope.chapter = "5";
        } else if($('#six').is(':checked')) {
            $scope.chapter = "6";
        } else if($('#seven').is(':checked')) {
            $scope.chapter = "7";
        } else if($('#eight').is(':checked')) {
            $scope.chapter = "8";
        } else if($('#nine').is(':checked')) {
            $scope.chapter = "9";
        } else if($('#ten').is(':checked')) {
            $scope.chapter = "10";
		};

    	var post = {
    		names: $scope.names,
    		chapter: $scope.chapter,
    		topic: $scope.topic,
    		type: $scope.type,
    		text: $scope.text,
    	}
		console.log(post);

    	$scope.posts.push(post);
    	PostsService.create(post)
        .then( (post) => {
            $('#postModal').modal('hide');
            swal({ title: "Congrats!", text: "You have added a new post.",
                type: "success", closeOnConfirm: true }
            );
            // $state.go($state.current, {}, {reload: true});
            
        });
    }
});

app.controller('pitchesController', function($scope) {
    console.log('pitchesCtrl!');

});

app.controller('resourcesController', function($scope) {
    console.log('resourcesCtrl!');

});