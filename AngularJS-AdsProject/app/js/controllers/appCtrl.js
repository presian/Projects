'use strict';
app.controller('AppCtrl', function($scope, $location, $cookieStore, noty) {

    $scope.pageName = function() {
        var path = $location.path();
        var editIndex = path.lastIndexOf('/user/ads/edit/');
        var dleteIndex = path.lastIndexOf('/user/ads/delete/');
        var editAdminAdIndex = path.lastIndexOf('/admin/ads/edit/');
        var dleteAdminAdIndex = path.lastIndexOf('/admin/ads/delete/');
        var editAdminUserIndex = path.lastIndexOf('/admin/users/edit/');
        var dleteAdminUserIndex = path.lastIndexOf('/admin/users/delete/');
        var editAdminCategoryIndex = path.lastIndexOf('/admin/categories/edit/');
        var dleteAdminCategoryIndex = path.lastIndexOf('/admin/categories/delete/');
        if (editIndex === 0) {
            return 'edit';
        } else if (dleteIndex === 0) {
            return 'delete';
        } else if (editAdminAdIndex === 0) {
            return 'adminEditAd';
        } else if (dleteAdminAdIndex === 0) {
            return 'adminDeleteAd';
        } else if (editAdminUserIndex === 0) {
            return 'adminEditUser';
        } else if (dleteAdminUserIndex === 0) {
            return 'adminDeleteUser';
        } else if (editAdminCategoryIndex === 0) {
            return 'adminEditCategory';
        } else if (dleteAdminCategoryIndex === 0) {
            return 'adminDeleteCategory';
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
