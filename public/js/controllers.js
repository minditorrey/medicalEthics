'use strict';

var app = angular.module('medicalethicsApp');


app.controller('homeController', function($scope) {
    console.log('homeCtrl!');

});
app.controller('postsController', function($scope, $state, $rootScope, $stateParams, PostsService) {
    console.log('postsCtrl!');
	PostsService.getAll()
    .then(function(res) {
        $scope.posts = res.data;
        console.log(res.data);
        var posts = $scope.posts;
    })
    .catch(function(err) {
        console.log('err:', err);
    });


    $scope.likeIt = function(post) {
		post.likes += 1;
		console.log('likes:', post.likes);
		PostsService.updateLikes(post)
		.then(function(res) {
			console.log('post.likes:', $scope.posts.likes);
			console.log(res)
		})
	}

	$scope.dislikeIt = function(post) {
		post.dislikes += 1;
		PostsService.updateDislikes(post)
		.then(function(res) {
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
        } else if($('#eleven').is(':checked')) {
            $scope.chapter = "11";
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

    	if (!$scope.names || !$scope.chapter || !$scope.topic || !$scope.type || !$scope.text) {
        	swal({ 
        		title: "Ooops!", 
        		text: "You must complete all fields. Please click on Add Post again and fill out all fields.",
               	type: "warning", 
               	closeOnConfirm: true 
            });
    	}

    	PostsService.create(post)
        .then( function(post) {
            $('#postModal').modal('hide');
            swal({ title: "Congrats!", text: "You have added a new post.",
                type: "success", closeOnConfirm: true }
            );
            // $state.go($state.current, {}, {reload: true});
            
        });
    }
});

app.controller('resourcesController', function($scope, ResourcesService) {
    console.log('resourcesCtrl!');

	ResourcesService.getAll()
    .then(function(res) {
        $scope.resources = res.data;
        console.log(res.data);
        var resources = $scope.resources;
    })
    .catch(function(err) {
        console.log('err:', err);
    });

    $scope.likeIt = function(resource) {
		resource.likes += 1;
		console.log('likes:', resource.likes);
		ResourcesService.updateLikes(resource)
		.then(function(res) {
			console.log('resource.likes:', $scope.resources.likes);
			console.log(res)
		})
	}

	$scope.dislikeIt = function(resource) {
		resource.dislikes += 1;
		ResourcesService.updateDislikes(resource)
		.then(function(res) {
			console.log('resource.dislikes:', $scope.resources.dislikes);
		})
		
	}

	$scope.openResourceModal = function() {
        $('#resourceModal').modal('show');
    }

    $scope.cancelResource = function(){
        $('#resourceModal').modal('hide');
    }


    $scope.addResource = function() {
    	$scope.name = $('#resName').val();
		$scope.chapter = $('#resChapter').val();
		$scope.topic = $('#resTopic').val();
		$scope.link = $('#resLink').val();
		$scope.overview = $('#resOverview').val();
		
    	if($('#ctwo').is(':checked')) {
            $scope.chapter = "2";
        } else if($('#cthree').is(':checked')) {
            $scope.chapter = "3";
        } else if($('#cfour').is(':checked')) {
            $scope.chapter = "4";
        } else if($('#cfive').is(':checked')) {
            $scope.chapter = "5";
        } else if($('#csix').is(':checked')) {
            $scope.chapter = "6";
        } else if($('#cseven').is(':checked')) {
            $scope.chapter = "7";
        } else if($('#ceight').is(':checked')) {
            $scope.chapter = "8";
        } else if($('#celeven').is(':checked')) {
            $scope.chapter = "11";
        } else if($('#cten').is(':checked')) {
            $scope.chapter = "10";
		};

    	var resource = {
    		name: $scope.name,
    		chapter: $scope.chapter,
    		topic: $scope.topic,
    		link: $scope.link,
    		overview: $scope.overview
    	}
		console.log('resource:', resource);

    	$scope.resources.push(resource);

    	if (!$scope.name || !$scope.chapter || !$scope.topic || !$scope.link || !$scope.overview) {
        	swal({ 
        		title: "Ooops!", 
        		text: "You must complete all fields. Please click on Add Resource again and fill out all fields.",
               	type: "warning", 
               	closeOnConfirm: true 
            });
    	}

    	ResourcesService.create(resource)
        .then(function(resource) {
            $('#resourceModal').modal('hide');
            swal({ title: "Congrats!", text: "You have added a new resource.",
                type: "success", closeOnConfirm: true }
            );
            // $state.go($state.current, {}, {reload: true}); 
        });
    }
});

app.controller('pitchesController', function($scope, PitchesService) {
    console.log('pitchesCtrl!');

	PitchesService.getAll()
    .then(function(res) {
        $scope.pitches = res.data;
        console.log(res.data);
        var pitches = $scope.pitches;
    })
    .catch(function(err) {
        console.log('err:', err);
    });

    $scope.likeIt = function(pitch) {
		pitch.likes += 1;
		console.log('likes:', pitch.likes);
		PitchesService.updateLikes(pitch)
		.then(function(res) {
			console.log('pitch.likes:', $scope.pitches.likes);
			console.log(res)
		})
	}

	$scope.dislikeIt = function(pitch) {
		pitch.dislikes += 1;
		pitchsService.updateDislikes(pitch)
		.then(function(res) {
			console.log('pitches.dislikes:', $scope.pitches.dislikes);
		})	
	}

	$scope.openPitchModal = function() {
        $('#pitchModal').modal('show');
    }

    $scope.cancelPitch = function(){
        $('#pitchModal').modal('hide');
    }


    $scope.addPitch = function() {
    	$scope.name = $('#pitchName').val();
		$scope.category = $('#pitchCategory').val();
		$scope.topic = $('#pitchTopic').val();
		$scope.link = $('#pitchLink').val();
		
    	if($('#doctor').is(':checked')) {
            $scope.category = "Doctors and Patients";
        } else if($('#death').is(':checked')) {
            $scope.category = "Life and Death";
        } else if($('#justice').is(':checked')) {
            $scope.category = "Health Care Justice";
        } 

    	var pitch = {
    		name: $scope.name,
    		category: $scope.category,
    		topic: $scope.topic,
    		link: $scope.link
    	}
		console.log('pitch:', pitch);

    	$scope.pitches.push(pitch);

    	if (!$scope.name || !$scope.category || !$scope.topic || !$scope.link) {
        	swal({ 
        		title: "Ooops!", 
        		text: "You must complete all fields. Please click on Add Resource again and fill out all fields.",
               	type: "warning", 
               	closeOnConfirm: true 
            });
    	}

    	PitchesService.create(pitch)
        .then(function(pitch) {
            $('#pitchModal').modal('hide');
            swal({ title: "Congrats!", text: "You have added a new pitch.",
                type: "success", closeOnConfirm: true }
            );
            // $state.go($state.current, {}, {reload: true}); 
        });
    }

});


