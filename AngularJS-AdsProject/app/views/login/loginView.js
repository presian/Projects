'use strict';

var loginView = angular.module('app.login', ['ngRoute']);

loginView.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/login', {
            templateUrl: './views/login/login.html',
            controller: 'LoginCtr'
        });
        $locationProvider.html5Mode(true);
    }
]);
