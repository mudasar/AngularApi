(function () {
    "use strict";
    var personDetailCtrl = angular.module('apptest').controller('PersonDetailCtrl', ['$scope', 'PeopleService', 'personData', '$notification', function ($scope, PeopleService, personData, $notification) {

        $scope.person = personData;

        $scope.editSubmit = function (person) {
            //update the person
            person.$update(function() {
                //updated
                $notification.success('Saved', 'Person details updated.', {}, 4000);
            });
        }
    }
    ]);
})();