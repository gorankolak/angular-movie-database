(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieInput', ['$scope', '$timeout', 'dataService', 'genresCounter', 'movieIdCounter',
            function($scope, $timeout, dataService, genresCounter, movieIdCounter) {

                $scope.$storage = dataService.storage;
                $scope.year = 1950;
                $scope.movieId = movieIdCounter.counter();
                $scope.selectValues = [{genreOption: 'Comedy'}, {genreOption: 'Drama'}, {genreOption: 'Horror'}, {genreOption: 'Action'}, {genreOption: 'Other'}];
                $scope.genre = $scope.selectValues[0];

                $scope.clearInputs = function() {
                    $scope.movie = '';
                    $scope.director = '';
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
                            director: $scope.director,
                            year: $scope.year,
                            genre: $scope.genre.genreOption
                        };

                        $scope.$storage.movies.push(newInputs);
                        $scope.clearInputs();
                        $scope.year = 1950;
                        $scope.movieId = movieIdCounter.counter();
                        
                        genresCounter.sumOfGenres();
                    }
                };
        }]);
})();