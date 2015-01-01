'use strict';

var startView = angular.module('app.startView', ['ngRoute']);

startView.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: './views/startView/startView.html',
            controller: 'MainCtr'
        });
        $locationProvider.html5Mode(true);
    }
]);
