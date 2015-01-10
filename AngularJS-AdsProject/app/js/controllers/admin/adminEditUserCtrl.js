'use strict';

app.controller('AdminEditUserCtrl', function($scope, $routeParams, $location, $cookieStore,
    adminUsersDataSvc, noty, authenticationSvc, categoriesAndTownsDataSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Edit user';
    $scope.towns = categoriesAndTownsDataSvc.getTowns();
    // $scope.user = adminUsersDataSvc.getUser($routeParams.id).$promise
    //     .then(function(data) {
    //         $scope.user = data;
    //         console.log(data);
    //         $scope.passwordData = {
    //             username: $scope.user.username,
    //             newPassword: '',
    //             confirmPassword: ''
    //         };
    //     });
    $scope.user = $cookieStore.get('editedUser');
    $scope.passwordData = {
        username: $scope.user.username,
        newPassword: '',
        confirmPassword: ''
    };

    $scope.edit = function() {
        if ($scope.user.townId === 'null') {
            $scope.user.townId = null;
        }

        adminUsersDataSvc.editUser($routeParams.username, $scope.user).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no(error, 'Editing failed, please try again later!');
            });
    };

    $scope.changePass = function() {
        adminUsersDataSvc.changePassword($scope.passwordData).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no(error, 'Changing failed, please try again later!');
            });
    };

    $scope.cancelEditing = function() {
        $cookieStore.remove('editedUser');
    };
});
