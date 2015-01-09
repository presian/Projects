'use strict';

app.controller('AdminEditAdCtrl', function($scope, $routeParams, adminAdsDataSvc,
    $location, categoriesAndTownsDataSvc, picPreviewSvc, noty, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Edit ad';
    $scope.towns = categoriesAndTownsDataSvc.getTowns();
    $scope.categories = categoriesAndTownsDataSvc.getCategories();

    adminAdsDataSvc.getAd($routeParams.id).$promise
        .then(function(data) {
            $scope.ad = data;
        }, function(error) {
            noty.no('Loading data failed, please try again later!');
        });

    $scope.fileSelected = function(fileInputField) {
        $scope.ad = picPreviewSvc.live(fileInputField, $scope.ad);
    };

    $scope.deleteImage = function() {
        picPreviewSvc.del($scope.ad);
    };

    $scope.editCurrentAd = function() {
        if ($scope.ad.categoryId === 'null') {
            $scope.ad.categoryId = null;
        }

        if ($scope.ad.townId === 'null') {
            $scope.ad.townId = null;
        }

        adminAdsDataSvc.editAd($routeParams.id, $scope.ad).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/admin/home');
            }, function(error) {
                noty.no('Editing failed, please try again later!');
            });
    };

    $scope.$watch('ad.date', function() {

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date() - 31536000000;
        };

        $scope.toggleMin();
        $scope.maxDate = new Date().getTime() + 31536000000;

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.format = 'dd-MMMM-yyyy';
    });


});
