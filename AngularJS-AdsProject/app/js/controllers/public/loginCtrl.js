'use strict';

app.controller('LoginCtrl', function($scope, $resource, $location, $cookieStore, BASE_URL) {
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

                    // }
                },
                function(error) {
                    console.log(error.data.error_description);
                }
            );
    };
});
