'use strict';

angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'app.startView',
        'app.login'
    ])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode(true);
        }
    ])
    .constant('BASE_URL', 'http://localhost:1337/api/');
