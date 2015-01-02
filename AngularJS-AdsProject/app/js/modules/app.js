'use strict';

var app = angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'app.startView',
        'app.login',
        'app.register'
    ])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ])
    .constant('BASE_URL', 'http://localhost:1337/api/');
