'use strict';

var regView = angular.module('app.register', ['ngRoute']);

regView.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: './views/regUserView/regUserView.html',
            controller: 'RegCtr'
        });
    }
]);
