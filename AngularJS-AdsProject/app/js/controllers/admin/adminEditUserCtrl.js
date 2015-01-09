'use strict';

app.controller('AdminEditUserCtrl', function($scope, $routeParams, $location, $cookieStore,
    adminUsersDataSvc, noty, authenticationSvc, categoriesAndTownsDataSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Edit user';
    $scope.towns = categoriesAndTownsDataSvc.getTowns();
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
        adminUsersDataSvc.editUser($routeParams.username, $scope.user).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no('Editing failed, please try again later!');
            });
    };

    $scope.changePass = function() {
        adminUsersDataSvc.changePassword($scope.passwordData).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no('Changing failed, please try again later!');
            });
    };
});
