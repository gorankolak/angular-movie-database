(function() {
    'use strict';

    angular
        .module('app')
        .service('movieIdCounter', ['$localStorage', function($localStorage) {

            this.counter = function() {
                    var count;
                    var movies = $localStorage.movies;

                    if (movies.length > 0) {
                        for (var i = 0; i < movies.length; i++) {
                            count = movies[i].movieId + 1;
                        }
                    } else {
                        count = 1;
                    }
                    return count;
                };
        }]);
})();