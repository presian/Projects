'use strict';

loginView.controller('LoginCtr', function($scope, $resource, BASE_URL) {
    $scope.login = {
        username: '',
        password: ''
    };

    $scope.makeLogin = function() {
        var resource = $resource(BASE_URL + 'user/login');
        resource.save($scope.login).$promise
            .then(
                function(data) {
                    sessionStorage.setItem('token', data.access_token);
                    sessionStorage.setItem('username', data.username);
                },
                function(error) {
                    console.log(error);
                }
            );
        // window.location = '/';
    };
});
