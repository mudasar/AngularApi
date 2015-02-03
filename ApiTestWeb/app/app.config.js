(function () {
    'use strict';
    var app = angular.module('apptest').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "app/views/main.html"
            })
            .state('people', {
                url: "/people",
                templateUrl: "app/views/people.html",
                controller: 'PeopleCtrl',
                resolve: {
                    people: function (PeopleService) {
                        return PeopleService.query();
                    }
                }
            })
            .state('persondetails', {
                url: '/persondetails/:personId',
                templateUrl: 'app/views/persondetails.html',
                controller: 'PersonDetailCtrl',
                resolve: {
                    person: function (PeopleService, $stateParams) {
                        var personId = $stateParams.personId;
                        return PeopleService.get({ id: personId }).$promise;
                    }
                }
            })
            .state('about', {
                url: "/about",
                templateUrl: "app/views/about.html"
            })
          .state('contact', {
              url: "/contact",
              templateUrl: "app/views/contact.html"
          })
          .state('login', {
              url: "/login",
              templateUrl: "app/views/login.html"
          })
          .state('register', {
              url: "/register",
              templateUrl: "app/views/register.html"
          });
    });
})();