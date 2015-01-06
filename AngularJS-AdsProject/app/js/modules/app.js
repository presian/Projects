'use strict';

var app = angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'validation.match',
        'ngCookies',
        'ui-notification'
    ])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                    templateUrl: './views/startView/startView.html',
                    controller: 'MainCtrl'
                })
                .when('/register', {
                    templateUrl: './views/regUserView/regUserView.html',
                    controller: 'RegCtrl'
                })
                .when('/login', {
                    templateUrl: './views/loginUserView/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/user/home', {
                    templateUrl: './views/userHomeView/userHomeView.html',
                    controller: 'MainCtrl'
                })
                .when('/user/ads/publish', {
                    templateUrl: './views/userNewAdView/userNewAdView.html',
                    controller: 'PublishAdCtrl'
                })
                .when('/user/ads', {
                    templateUrl: './views/userAdsView/userAdsView.html',
                    controller: 'UserAdsCtrl'
                })
                .when('/user/ads/edit/:id', {
                    templateUrl: './views/userEditAdView/userEditAdView.html',
                    controller: 'UserEditAdCtrl'
                })
                .when('/user/ads/delete/:id', {
                    templateUrl: './views/userDeleteAdView/userDeleteAdView.html',
                    controller: 'UserDeleteAdCtrl'
                })
                .when('/user/profile', {
                    templateUrl: './views/userEditProfileView/userEditProfileView.html',
                    controller: 'UserEditProfileCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ])
    .constant('BASE_URL', 'http://localhost:1337/api/');
