(function() {
    'use strict';

    angular
        .module('app')
        .config(function($routeProvider) {

            $routeProvider

            .when('/', {
                templateUrl: 'app/movie-input/movie-input.html',
                controller: 'movieInput'
            })
            .when('/movie-display', {
                templateUrl: 'app/movie-display/movie-display.html',
                controller: 'movieDisplay'
            });
        });        
})();