'use strict';

app.controller('UserAdsCtrl', function($scope, $route, userAdsDataSvc, authenticationSvc, noty) {

    authenticationSvc.checkUser();
    $scope.pageTitle = 'My Ads';
    $scope.pagingData = {
        numPages: 0,
        currentPage: 1
    };

    $scope.statusFilter = {
        status: ''
    };

    $scope.$watch('statusFilter.status', function() {
        getAds();
    });

    $scope.$watch('pagingData.currentPage', function() {
        getAds();
    });

    $scope.makeInactive = makeInactive;
    $scope.publishAgain = publishAgain;

    function getAds() {
        userAdsDataSvc.getFilteredAds($scope.statusFilter, $scope.pagingData.currentPage).$promise
            .then(function(data) {
                $scope.userAds = data.ads;
                $scope.pagingData.numPages = data.numPages;
            }, function(error) {
                noty.no('Loading data failed, plese try again later!');
            });
    }

    function makeInactive(id) {
        var type = 'deactivate';
        userAdsDataSvc.deactivateOrPublisAd(id, type).$promise
            .then(function(data) {
                noty.yes(data.message);
                $route.reload();
            }, function(error) {
                noty.no('Action failed, plese try again later!');
            });
    }

    function publishAgain(id) {
        var type = 'publishagain';
        userAdsDataSvc.deactivateOrPublisAd(id, type).$promise
            .then(function(data) {
                noty.yes(data.message);
                $route.reload();
            }, function(error) {
                noty.no('Action failed, plese try again later!');
            });
    }
});
