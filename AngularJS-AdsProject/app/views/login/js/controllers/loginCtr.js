'use strict';

loginView.controller('LoginCtr', function($scope, $resource, BASE_URL) {
    $scope.login = {
        username: '',
        password: ''
    };

    $scope.makeLogin = function() {
        var resource = $resource(BASE_URL + 'user/login');
        resource.save($scope.login);
        window.location = '/';
    };
});
