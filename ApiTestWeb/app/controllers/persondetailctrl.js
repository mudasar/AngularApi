(function() {
    'use strict';
    var personDetailCtrl = angular.module('apptest').controller('PersonDetailCtrl', ['$scope','PeopleService','person', function($scope,PersonService,person) {

        $scope.person = person;

        }
    ]);
})();