'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.articles').factory('Articles', ['$resource','$location',
  function($resource,$location) {
    if($location.$$path === '/about') {
    	console.log('about service');
    	return $resource('about');
    } else {
	    return $resource('articles/:articleId', {
	      articleId: '@_id'
	    }, {
	      update: {
	        method: 'PUT'
	      }
	    });
	  }
  }
]);
