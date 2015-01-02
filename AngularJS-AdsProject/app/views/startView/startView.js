'use strict';

var startView = angular.module('app.startView', ['ngRoute']);

startView.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: './views/startView/startView.html',
            controller: 'MainCtr'
        });
    }
]);
