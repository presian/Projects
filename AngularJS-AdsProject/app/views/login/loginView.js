'use strict';

var loginView = angular.module('app.login', ['ngRoute']);

loginView.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: './views/login/login.html',
        controller: 'LoginCtr'
    });
}]);
