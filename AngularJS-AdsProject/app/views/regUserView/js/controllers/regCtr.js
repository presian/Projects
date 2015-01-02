'use strict';

regView.controller('RegCtr', function($scope, $resource, BASE_URL, townsData) {
    $scope.regData = {
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        email: '',
        phone: '',
        townId: ''
    };

    townsData.query().$promise.then(
        function function_name(data) {
            $scope.towns = data;
        },
        function(error) {
            console.log(error);
        }
    );

    $scope.makeRegistration = function() {
        var resource = $resource(BASE_URL + 'user/register');
        resource.save($scope.regData).$promise
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
