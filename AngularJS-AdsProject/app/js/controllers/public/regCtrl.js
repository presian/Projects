'use strict';

app.controller('RegCtrl', function($scope, $resource, $location, $cookieStore,
    authChecker, BASE_URL, townsData, noty) {

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
                    $cookieStore.put('token', data.access_token);
                    $cookieStore.put('username', data.username);
                    $scope.$parent.userData.username = data.username;
                    $location.path('user/home');
                    noty.yes('Registration complete!');
                },
                function(error) {
                    var errorData = error.data.modelState[Object.keys(error.data.modelState)[0]];
                    noty.no(errorData[0] || 'Houston we have a problem!');
                }
            );
    };
});
