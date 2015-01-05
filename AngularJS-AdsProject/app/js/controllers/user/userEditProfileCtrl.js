'use strict';

app.controller('UserEditProfileCtrl', function($scope, $location, userProfileData, townsData, authChecker) {
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
                //TODO: succesMessage
                $location.path('/user/ads');
            }, function(error) {
                //TODO: errorMesage
            });
    };

    $scope.changePass = function() {
        userProfileData.update($scope.passwordData, 'changePassword').$promise
            .then(function(data) {
                //TODO: successMesage
                $location.path('/user/ads');
            }, function(error) {
                //TODO: errorMesage
            });
    };
});
