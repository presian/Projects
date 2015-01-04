'use strict';
app.controller('AppCtrl', function($scope, $location) {
    $scope.pageName = function() {
        var path = $location.path();
        var index = path.lastIndexOf('/user/ads/edit/');
        if (index === 0) {
            return 'edit';
        } else {
            return $location.path();
        }
    };

    var username = sessionStorage.getItem('username');
    if (username) {
        $scope.username = username;
    }

    $scope.statusFilter = {
        status: ''
    };
});
