'use strict';

var loginView = angular.module('app.login', ['ngRoute']);

loginView.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: './views/loginUserView/login.html',
            controller: 'LoginCtr'
        });
    }
]);
