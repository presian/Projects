'use strict';

app.controller('LoginCtrl', function($scope, $resource, $location, $cookieStore, noty, BASE_URL) {

    if ($cookieStore.get('username')) {
        $location.path('/user/home');
    }

    $scope.login = {
        username: '',
        password: ''
    };

    $scope.makeLogin = function() {
        var resource = $resource(BASE_URL + 'user/login');
        resource.save($scope.login).$promise
            .then(
                function(data) {
                    $cookieStore.put('token', data.access_token);
                    $cookieStore.put('username', data.username);
                    $scope.$parent.userData.username = data.username;
                    // if (data.isAdmin) {
                    //     $location.path('admin/home');
                    // } else {
                    $location.path('user/home');
                    noty.yes('Login successfuly');
                    // }
                },
                function(error) {
                    noty.no(error.data.error_description || 'Houston we have a problem!');
                }
            );
    };
});
