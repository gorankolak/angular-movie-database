(function() {
    'use strict';

    angular
        .module('app')
        .service('movieApi', ['$resource', function($resource) {

            this.resource = $resource('http://www.omdbapi.com/',
                {callback: 'JSON_CALLBACK'},
                {get:    {method:'JSONP'}}
            );
        }]);
})();