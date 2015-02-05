(function () {
    'use strict';
    var personDetailCtrl = angular.module('apptest').controller('PersonDetailCtrl', ['$scope', 'PeopleService', 'personData', function ($scope, PeopleService, personData) {

        $scope.person = personData;

        $scope.editSubmit = function (person) {
            //update the person
            person.$update(function() {
                //updated
                alert('data is saved');
            });
        }
    }
    ]);
})();