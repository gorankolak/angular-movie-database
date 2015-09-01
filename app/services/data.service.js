(function() {
    'use strict';

    angular
        .module('app')
        .service('dataService', ['$localStorage', function($localStorage) {
            
            this.storage = $localStorage.$default({
                movies: [],
                genreSum: {
                    comedy: 0,
                    drama: 0,
                    horror: 0,
                    action: 0,
                    other: 0
                }
            });
        }]);
})();