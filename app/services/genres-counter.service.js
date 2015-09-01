(function() {
    'use strict';

    angular
        .module('app')
        .service('genresCounter', ['$localStorage', function($localStorage) {

            this.sumOfGenres = function() {
                var movies = $localStorage.movies;
                var genreSum = $localStorage.genreSum;
                var moviesLength = $localStorage.movies.length;

                genreSum.comedy = 0;
                genreSum.drama = 0;
                genreSum.horror = 0;
                genreSum.action = 0;
                genreSum.other = 0;

                for (var i = 0; i < moviesLength; i++) {
                    if (movies[i].genre === 'Comedy') {
                        genreSum.comedy++;
                    } else if (movies[i].genre === 'Drama') {
                        genreSum.drama++;
                    } else if (movies[i].genre === 'Horror') {
                        genreSum.horror++;
                    } else if (movies[i].genre === 'Action') {
                        genreSum.action++;
                    } else {
                        genreSum.other++;
                    }
                }
            };
        }]);
})();