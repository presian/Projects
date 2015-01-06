'use strict';

app.controller('UserEditProfileCtrl', function($scope, $location, userProfileData, townsData, authChecker, noty) {
    authChecker.checkUser();
    $scope.passwordData = {
        oldPassword: '',
        newPssword: '',
        confirmPassword: ''
    };

    townsData.query().$promise
        .then(function(data) {
            $scope.towns = data;
        }, function(error) {
            //TODO: errorMesage
        });
    userProfileData.getProfileData().$promise
        .then(function(data) {
            $scope.user = data;
            //TODO: succesMessage
        }, function(error) {
            //TODO: errorMesage
        });

    $scope.edit = function() {
        if ($scope.user.id === 'null') {
            $scope.user.id = null;
        }

        userProfileData.update($scope.user, 'profile').$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/user/ads');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };

    $scope.changePass = function() {
        userProfileData.update($scope.passwordData, 'changePassword').$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/user/ads');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
