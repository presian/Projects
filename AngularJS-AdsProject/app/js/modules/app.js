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
                    templateUrl: './views/publicStartView/publicStartView.html',
                    controller: 'PublicAdsCtrl'
                })
                .when('/register', {
                    templateUrl: './views/publicRegistrationView/publicRegistrationView.html',
                    controller: 'RegistrationCtrl'
                })
                .when('/login', {
                    templateUrl: './views/publicLoginView/publicLoginView.html',
                    controller: 'LoginCtrl'
                })
                .when('/user/home', {
                    templateUrl: './views/userHomeView/userHomeView.html',
                    controller: 'UserHomeCtrl'
                })
                .when('/user/ads/publish', {
                    templateUrl: './views/userPublishAdView/userPublishAdView.html',
                    controller: 'UserPublishAdCtrl'
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
                .when('/admin/home', {
                    templateUrl: './views/adminHomeView/adminHomeView.html',
                    controller: 'AdminHomeCtrl'
                })
                .when('/admin/ads/edit/:id', {
                    templateUrl: './views/adminEditAdView/adminEditAdView.html',
                    controller: 'AdminEditAdCtrl'
                })
                .when('/admin/ads/delete/:id', {
                    templateUrl: './views/adminDeleteAdView/adminDeleteAdView.html',
                    controller: 'AdminDeleteAdCtrl'
                })
                .when('/admin/users/list', {
                    templateUrl: './views/adminUsersListView/adminUsersListView.html',
                    controller: 'AdminUsersListCtrl'
                })
                .when('/admin/users/edit/:username', {
                    templateUrl: './views/adminEditUserView/adminEditUserView.html',
                    controller: 'AdminEditUserCtrl'
                })
                .when('/admin/users/delete/:username', {
                    templateUrl: './views/adminDeleteUserView/adminDeleteUserView.html',
                    controller: 'AdminDeleteUserCtrl'
                })
                .when('/admin/categories/list', {
                    templateUrl: './views/adminCategoriesListView/adminCategoriesListView.html',
                    controller: 'AdminCategoriesListCtrl'
                })
                .when('/admin/categories/create', {
                    templateUrl: './views/adminCreateCategoryView/adminCreateCategoryView.html',
                    controller: 'AdminCreateCategoryCtrl'
                })
                .when('/admin/categories/edit/:id/:name', {
                    templateUrl: './views/adminEditCategoryView/adminEditCategoryView.html',
                    controller: 'AdminEditCategoryCtrl'
                })
                .when('/admin/categories/delete/:id/:name', {
                    templateUrl: './views/adminDeleteCategoryView/adminDeleteCategoryView.html',
                    controller: 'AdminDeleteCategoryCtrl'
                })
                .when('/admin/towns/list', {
                    templateUrl: './views/adminTownsListView/adminTownsListView.html',
                    controller: 'AdminTownsListCtrl'
                })
                .when('/admin/towns/create', {
                    templateUrl: './views/adminCreateTownView/adminCreateTownView.html',
                    controller: 'AdminCreateTownCtrl'
                })
                .when('/admin/towns/edit/:id/:name', {
                    templateUrl: './views/adminEditTownView/adminEditTownView.html',
                    controller: 'AdminEditTownCtrl'
                })
                .when('/admin/towns/delete/:id/:name', {
                    templateUrl: './views/adminDeleteTownView/adminDeleteTownView.html',
                    controller: 'AdminDeleteTownCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ])
    .constant('BASE_URL', 'http://localhost:1337/api/');
