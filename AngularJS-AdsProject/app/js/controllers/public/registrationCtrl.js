'use strict';

app.controller('RegistrationCtrl', function($scope, $resource, $location, $cookieStore,
    $route, BASE_URL, categoriesAndTownsDataSvc, noty, authenticationSvc) {

    authenticationSvc.checkLogin();
    $scope.pageTitle = 'Registration';
    $scope.regData = {
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        email: '',
        phone: '',
        townId: ''
    };

    $scope.towns = categoriesAndTownsDataSvc.getTowns();

    $scope.makeRegistration = function() {
        var resource = $resource(BASE_URL + 'user/register');
        resource.save($scope.regData).$promise
            .then(
                function(data) {
                    $cookieStore.put('token', data.access_token);
                    $cookieStore.put('username', data.username);
                    $scope.$parent.userData.username = data.username;
                    $route.reload();
                    $location.path('user/home');
                    noty.yes('Registration complete!');
                },
                function(error) {
                    noty.no(error, 'Registration failed, please try again later!');
                }
            );
    };
});
