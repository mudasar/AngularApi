(function() {
    'use strict';
    var peopleService = angular.module('apptest').factory('PeopleService', ['$resource', function($resource) {
        return $resource("http://localhost:19099/api/people/:id", { id: '@id' }, {
            'update': { method: 'PUT' }
        });
    }]);
})();