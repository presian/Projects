'use strict';

app.controller('UserAdsCtrl', function($scope, $route, userAdsData, authChecker, noty) {

    authChecker.checkUser();

    $scope.pagingData = {
        numPages: 0,
        currentPage: 1
    };

    $scope.$parent.$watch('statusFilter.status', function() {
        getAds();
    });

    $scope.$watch('pagingData.currentPage', function() {
        getAds();
    });

    $scope.makeInactive = makeInactive;
    $scope.publishAgain = publishAgain;

    function getAds() {
        userAdsData.getFilteredAds($scope.$parent.statusFilter, $scope.pagingData.currentPage).$promise
            .then(function(data) {
                $scope.userAds = data.ads;
                $scope.pagingData.numPages = data.numPages;
            }, function(error) {
                console.log(error.data.error_description);
            });
    }

    function makeInactive(element, $event) {
        var adId = getCurrentAdId($event);
        var type = 'deactivate';
        userAdsData.deactivateOrPublisAd(adId, type).$promise
            .then(function(data) {
                noty.yes(data.message);
                $route.reload();
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    }

    function publishAgain(element, $event) {
        var adId = getCurrentAdId($event);
        var type = 'publishagain';
        userAdsData.deactivateOrPublisAd(adId, type).$promise
            .then(function(data) {
                noty.yes(data.message);
                $route.reload();
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    }

    function getCurrentAdId($event) {
        return $($event.target).parent('.btn-group-vertical').data('ad').id;
    }
});
