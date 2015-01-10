'use strict';

app.controller('UserEditProfileCtrl', function($scope, $location, userProfileDataSvc,
    categoriesAndTownsDataSvc, authenticationSvc, noty) {

    authenticationSvc.checkUser();
    $scope.pageTitle = 'Edit User Profile';
    $scope.passwordData = {
        oldPassword: '',
        newPssword: '',
        confirmPassword: ''
    };

    $scope.towns = categoriesAndTownsDataSvc.getTowns();

    userProfileDataSvc.getProfileData().$promise
        .then(function(data) {
            $scope.user = data;
        }, function(error) {
            noty.no(error, 'Cannot load userdata, please try again later!');
        });

    $scope.edit = function() {
        if ($scope.user.townId === 'null') {
            $scope.user.townId = null;
        }

        userProfileDataSvc.update($scope.user, 'profile').$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/user/ads');
            }, function(error) {
                noty.no(error, 'Editing failed, please try again later!');
            });
    };

    $scope.changePass = function() {
        userProfileDataSvc.update($scope.passwordData, 'changePassword').$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/user/ads');
            }, function(error) {
                noty.no(error, 'Cannot update password, please try again later!');
            });
    };
});
