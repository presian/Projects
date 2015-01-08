'use strict';
app.controller('AppCtrl', function($scope, $location, $cookieStore, noty) {

    $scope.pageName = function() {
        var path = $location.path();
        var editIndex = path.lastIndexOf('/user/ads/edit/');
        var dleteIndex = path.lastIndexOf('/user/ads/delete/');
        var editAdminIndex = path.lastIndexOf('/admin/ads/edit/');
        var dleteAdminIndex = path.lastIndexOf('/admin/ads/delete/');
        if (editIndex === 0) {
            return 'edit';
        } else if (dleteIndex === 0) {
            return 'delete';
        } else if (editAdminIndex === 0) {
            return 'adminEdit';
        } else if (dleteAdminIndex === 0) {
            return 'adminDelete';
        } else {
            return $location.path();
        }
    };

    $scope.showUserName = function() {
        var path = $location.path();
        var userIndex = path.indexOf('/user/');
        var adminIndex = path.indexOf('/admin/');

        if (userIndex >= 0 || adminIndex >= 0) {
            return true;
        } else {
            return false;
        }
    };

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

    $scope.statusFilter = {
        status: ''
    };
});
