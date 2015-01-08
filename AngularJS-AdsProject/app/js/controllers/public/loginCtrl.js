'use strict';

app.controller('LoginCtrl', function($scope, $resource, $location, $cookieStore, noty, authChecker, BASE_URL) {

    $scope.login = {
        username: '',
        password: ''
    };

    $scope.makeLogin = function() {
        var resource = $resource(BASE_URL + 'user/login');
        resource.save($scope.login).$promise
            .then(
                function(data) {
                    $cookieStore.remove('token');
                    $cookieStore.remove('username');
                    $cookieStore.remove('isAdmin');
                    $scope.$parent.userData.username = '';

                    $cookieStore.put('token', data.access_token);
                    $cookieStore.put('username', data.username);
                    if (data.isAdmin) {
                        $cookieStore.put('isAdmin', data.isAdmin);
                    }

                    $scope.$parent.userData.username = data.username;
                    if (data.isAdmin) {
                        $location.path('admin/home');
                    } else {
                        $location.path('user/home');
                    }
                    noty.yes('Login successfuly');
                },
                function(error) {
                    noty.no(error.data.error_description || 'Houston we have a problem!');
                }
            );
    };
});
