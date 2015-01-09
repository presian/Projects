'use strict';
app.controller('AppCtrl', function($scope, $location, $cookieStore, noty) {

    $scope.logout = function() {
        $cookieStore.remove('token');
        $cookieStore.remove('username');
        $cookieStore.remove('isAdmin');
        $scope.userData.username = '';
        $location.path('/');
        noty.yes('Logout successfuly!');
    };

    $scope.userData = {
        username: ''
    };

    var username = $cookieStore.get('username');
    if (username) {
        $scope.userData.username = username;
    }
});
