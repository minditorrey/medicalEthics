var app = angular.module('medicalethicsApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('posts', {
			url: '/posts',
			templateUrl: '/templates/posts.html',
			controller: 'postsController'
		})
		.state('pitches', {
			url: '/pitches',
			templateUrl: '/templates/pitches.html',
			controller: 'pitchesController'
		})
		.state('resources', {
			url: '/resources',
			templateUrl: '/templates/resources.html',
			controller: 'resourcesController'
		})



	$urlRouterProvider.otherwise('/');

});