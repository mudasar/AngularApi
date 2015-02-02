(function () {
    'use strict';
    var peoplectrl = angular.module('apptest').controller('PeopleCtrl', [
        '$scope', 'PeopleService','people', function ($scope, PeopleService,people) {

            //PeopleService.query(function (data) {
            //    $scope.peopledata = data;
            //});
            $scope.people = people;
            console.log($scope.people);
            //$scope.people = [{
            //    id: 1,
            //    name: 'ali',
            //    blogUrl: 'https://aliwajdan.wordpress.com'
            //}];
        }
    ]);
})();