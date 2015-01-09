'use strict';

app.controller('UserEditAdCtrl', function($scope, $routeParams, $location,
    userAdsDataSvc, categoriesAndTownsDataSvc, authenticationSvc, noty, picPreviewSvc) {
    authenticationSvc.checkUser();
    $scope.pageTitle = 'Edit Ad';
    $scope.ad = userAdsDataSvc.getById($routeParams.id);
    $scope.towns = categoriesAndTownsDataSvc.getTowns();
    $scope.categories = categoriesAndTownsDataSvc.getCategories();

    $scope.fileSelected = function(fileInputField) {
        $scope.ad = picPreviewSvc.live(fileInputField, $scope.ad);
    };

    $scope.deleteImage = function() {
        $scope.ad = picPreviewSvc.del($scope.ad);
    };

    $scope.editCurrentAd = function() {
        if ($scope.ad.categoryId === 'null') {
            $scope.ad.categoryId = null;
        }

        if ($scope.ad.townId === 'null') {
            $scope.ad.townId = null;
        }

        userAdsDataSvc.edit($routeParams.id, $scope.ad).$promise
            .then(function(data) {
                $location.path('/user/ads');
                noty.yes(data.message);
            }, function(error) {
                noty.no('Editing failed, please try again later!');
            });
    };

});
