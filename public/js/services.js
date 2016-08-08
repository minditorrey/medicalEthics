'use strict';

var app = angular.module('medicalethicsApp');

app.service('PostsService', function($http) {
	this.getAll = () => {
    	return $http.get('/api/posts');
  	};

	this.create = post => {
		return $http.post('/api/posts', post);	
	};

	this.update = post => {
    	return $http.put(`/api/posts/${post._id}`, post);
  	};

  	this.removePost = (post) => {
  		return $http.delete(`/api/posts/${post._id}`);
  	};

  	this.getThisPost = (id) => {
  		return $http.get(`/api/posts/${id}`);
  	};

  	this.updateLikes = post => {
      return $http.put(`/api/posts/likes/${post._id}`, post);
    }
    this.updateDislikes = post => {
      return $http.put(`/api/posts/dislikes/${post._id}`, post);
    }
});

app.service('ResourcesService', function($http) {
	this.getAll = () => {
    	return $http.get('/api/resources');
  	};
  	this.create = resource => {
		return $http.post('/api/resources', resource);	
	};

	this.updateLikes = resource => {
      return $http.put(`/api/resources/likes/${resource._id}`, resource);
    }
    this.updateDislikes = resource => {
      return $http.put(`/api/resources/dislikes/${resource._id}`, resource);
    }
});

app.service('PitchesService', function($http) {
	this.getAll = () => {
    	return $http.get('/api/pitches');
  	};
  	this.create = pitch => {
		return $http.post('/api/pitches', pitch);	
	};

	this.updateLikes = pitch => {
      return $http.put(`/api/pitches/likes/${pitch._id}`, pitch);
    }
    this.updateDislikes = pitch => {
      return $http.put(`/api/pitches/dislikes/${pitch._id}`, pitch);
    }
});
