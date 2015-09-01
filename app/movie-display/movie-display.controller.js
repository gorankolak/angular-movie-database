(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieDisplay', ['$scope', 'dataService', 'genresCounter',
            function($scope, dataService, genresCounter) {

                // Getting the data from local storage
                $scope.movies = dataService.storage.movies;
                $scope.genresSum = dataService.storage.genreSum;

                // Deletes movies from local storage and from the table
                $scope.removeMovie = function(index) {
                    $scope.movies.splice(index, 1);
                    $scope.moviesSum =  $scope.movies.length;

                    genresCounter.sumOfGenres();

                    $scope.genresSumArray =  [$scope.genresSum.comedy, $scope.genresSum.drama, $scope.genresSum.horror, $scope.genresSum.action, $scope.genresSum.other];
                };

                $scope.moviesSum =  $scope.movies.length;
                $scope.genresSumArray =  [$scope.genresSum.comedy, $scope.genresSum.drama, $scope.genresSum.horror, $scope.genresSum.action, $scope.genresSum.other];

                $scope.$watch('moviesSum', function() {
                    $scope.graphChartData = [[$scope.moviesSum]];
                });

                $scope.$watch('genresSumArray', function() {
                    $scope.pieChartData = $scope.genresSumArray;
                });

                // Charts.js
                $scope.graphChartLabels = ['Number of Movies in Total'];
                $scope.graphChartData = [[$scope.moviesSum]];
                $scope.pieChartLabels = ['Comedy', 'Drama', 'Horror', 'Action', 'Other'];
                $scope.pieChartData = $scope.genresSumArray;

                // Table sorting
                $scope.sortParam = 'movieId';

                $scope.sorting = function(sortParam) {
                    $scope.sortParam = sortParam;
                    $scope.reverseOrder = !$scope.reverseOrder;
                };
            }
        ]);
})();