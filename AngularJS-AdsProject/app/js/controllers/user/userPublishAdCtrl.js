'use strict';

app.controller('UserPublishAdCtrl', function($scope, $location,
    categoriesAndTownsDataSvc, userAdsDataSvc, authenticationSvc, noty, picPreviewSvc) {

    authenticationSvc.checkUser();
    $scope.pageTitle = 'Publish New Ad';
    $scope.adData = {
        title: '',
        text: '',
        imageDataUrl: '',
        categoryId: null,
        townId: null
    };

    $scope.towns = categoriesAndTownsDataSvc.getTowns();
    $scope.categories = categoriesAndTownsDataSvc.getCategories();

    $scope.fileSelected = function(fileInputField) {
        $scope.adData = picPreviewSvc.live(fileInputField, $scope.adData);
    };

    $scope.publishingAd = function() {
        userAdsDataSvc.create($scope.adData).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('user/home');
            }, function(error) {
                noty.no('Publishing failed, please try again later!');
            });
    };
});
