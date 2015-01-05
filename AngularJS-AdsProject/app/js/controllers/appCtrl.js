'use strict';
app.controller('AppCtrl', function($scope, $location, $cookieStore) {

    $scope.pageName = function() {
        var path = $location.path();
        var editIndex = path.lastIndexOf('/user/ads/edit/');
        var dleteIndex = path.lastIndexOf('/user/ads/delete/');
        if (editIndex === 0) {
            return 'edit';
        } else if (dleteIndex === 0) {
            return 'delete';
        } else {
            return $location.path();
        }
    };

    $scope.logout = function() {
        $cookieStore.remove('token');
        $cookieStore.remove('username');
        $scope.userData.username = '';
        $location.path('/');
    };

    $scope.userData = {
        username: ''
    };

    var username = $cookieStore.get('username');
    if (username) {
        $scope.userData.username = username;
    }

    $scope.statusFilter = {
        status: ''
    };
});
