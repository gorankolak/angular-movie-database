(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieSearch', ['$scope', '$timeout', 'movieApi', 'dataService', 'genresCounter', 'movieIdCounter',
            function($scope, $timeout, movieApi, dataService, genresCounter, movieIdCounter) {

                var movies = movieApi.resource;
                var storageData = dataService.storage;

                $scope.getMovieFromOMDb = function() {
                   movies.get({t: $scope.keyword}, function(data) {
                        var movieData = data;
                        $scope.title = movieData.Title;
                        $scope.director = movieData.Director;
                        $scope.year = movieData.Year;
                        $scope.genre = movieData.Genre;
                    });
                   $scope.returnedResult = true;
                };

                $scope.addMovieToDatabase = function() {
                    var newInputs = {
                            movieId: movieIdCounter.counter(),
                            movie: $scope.title,
                            director: $scope.director,
                            year: $scope.year,
                            genre: $scope.genre
                        };

                        $scope.keyword = '';
                        $scope.successMessage = true;

                        $timeout(function() {
                            $scope.successMessage = false;
                        }, 2500);

                        dataService.storage.movies.push(newInputs);
                        genresCounter.sumOfGenres();
                };
        }]);
})();