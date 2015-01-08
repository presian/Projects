'use strict';

app.controller('AdminEditUserCtrl', function($scope, $routeParams, $location, $cookieStore,
    adminUsersData, noty, authChecker, townsData) {
    authChecker.checkUser();

    $scope.towns = townsData.query();
    $scope.user = $cookieStore.get('editedUser');
    // $scope.user = {
    //     name: user.name,
    //     username: user.username,
    //     email: user.email,
    //     phoneNumber: user.phoneNumber,
    //     townId: user.townId,
    //     isAdmin: user.isAdmin
    // };

    $scope.passwordData = {
        username: $scope.user.username,
        newPassword: '',
        confirmPassword: ''
    };

    $scope.edit = function() {
        adminUsersData.editUser($routeParams.username, $scope.user).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };

    $scope.changePass = function() {
        adminUsersData.changePassword($scope.passwordData).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    }

});
