(function() {
    'use strict';

    angular
        .module('app')
        .config(function($routeProvider) {

            $routeProvider

            .when('/', {
                templateUrl: 'app/movie-home/movie-home.html',
                controller: 'movieHome'
            })
            .when('/movie-search', {
                templateUrl: 'app/movie-search/movie-search.html',
                controller: 'movieSearch'
            })
            .when('/movie-input', {
                templateUrl: 'app/movie-input/movie-input.html',
                controller: 'movieInput'
            })
            .when('/movie-display', {
                templateUrl: 'app/movie-display/movie-display.html',
                controller: 'movieDisplay'
            });
        });
})();