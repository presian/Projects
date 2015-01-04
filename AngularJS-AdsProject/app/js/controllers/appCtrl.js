'use strict';
app.controller('AppCtrl', function($scope, $location) {
    $scope.pageName = function() {
        return $location.path();
    };

    var username = sessionStorage.getItem('username');
    if (username) {
        $scope.username = username;
    }
});
