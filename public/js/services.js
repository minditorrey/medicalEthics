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