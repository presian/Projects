'use strict';

app.controller('AdminEditAdCtrl', function($scope, $routeParams, adminAdsData,
    $location, townsData, categoryData, picPreview, noty) {
    $scope.towns = townsData.query();
    $scope.categories = categoryData.query();
    adminAdsData.getAd($routeParams.id).$promise
        .then(function(data) {
            $scope.ad = data;
        });

    $scope.fileSelected = function(fileInputField) {
        $scope.ad = picPreview.live(fileInputField, $scope.ad);
    };

    $scope.deleteImage = function() {
        picPreview.del($scope.ad);
    };

    $scope.editCurrentAd = function() {
        if ($scope.ad.categoryId === 'null') {
            $scope.ad.categoryId = null;
        }

        if ($scope.ad.townId === 'null') {
            $scope.ad.townId = null;
        }

        adminAdsData.editAd($routeParams.id, $scope.ad).$promise
            .then(function(data) {
                $location.path('/admin/home');
                noty.yes(data.message);
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };

    $scope.$watch('ad.date', function(newValue) {

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
