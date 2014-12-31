'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'app.startView',
        'app.login'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
