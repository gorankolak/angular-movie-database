(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieInput', ['$scope', '$localStorage', '$timeout', 'genresCounter',
            function($scope, $localStorage, $timeout, genresCounter) {

                $scope.$storage = $localStorage.$default({
                        movies: [],
                        genreSum: {
                            comedy: 0, 
                            drama: 0, 
                            horror: 0, 
                            action: 0, 
                            other: 0
                        }
                });

                $scope.year = 1950;

                $scope.movieIdCounter =  function() {
                    var count;
                    var movies = $scope.$storage.movies;

                    if (movies.length > 0) {
                        for (var i = 0; i < movies.length; i++) {
                            count = movies[i].movieId + 1;
                        }
                    } else {
                        count = 1;
                    }
                    return count;
                };

                $scope.movieId = $scope.movieIdCounter();

                $scope.selectValues = [{genreOption: 'Comedy'}, {genreOption: 'Drama'}, {genreOption: 'Horror'}, {genreOption: 'Action'}, {genreOption: 'Other'}];

                $scope.genre = $scope.selectValues[0];

                $scope.clearInputs = function() {
                    $scope.movie = '';
                    $scope.actor = '';
                    $scope.year = '';
                    $scope.submitted = false;
                };

                $scope.addToTable = function(isValid) {

                    if (!isValid) {
                        $scope.btnClicked = true;
                    } else if (isValid) {
                        $scope.btnClicked = false;
                        $scope.successMessage = true;

                        $timeout(function() {
                            $scope.successMessage = false;
                        }, 2500);

                        var newInputs = {
                            movieId: $scope.movieId,
                            movie: $scope.movie,
                            actor: $scope.actor,
                            year: $scope.year,
                            genre: $scope.genre.genreOption
                        };

                        $scope.$storage.movies.push(newInputs);
                        $scope.movieId++;
                        $scope.clearInputs();
                        $scope.year = 1950;

                        genresCounter.sumOfGenres();
                    }
                };
        }]);
})();