'use strict';

app.controller('AdminHomeCtrl', function($scope, authChecker, adminAdsData, townsData, categoryData, noty) {
    authChecker.checkUser();
    $scope.towns = townsData.query();
    $scope.categories = categoryData.query();
    $scope.getAdsData = {
        categoryId: '',
        townId: '',
        pageSize: 2,
        startPage: 1,
        status: '',
        order: '-Date'
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.$parent.$watch('statusFilter.status', function(newValue) {
        $scope.getAdsData.status = newValue;
    });

    $scope.$watch('pagingData.currentPage', function(newValue) {
        $scope.getAdsData.startPage = newValue;
    });

    $scope.$watch('getAdsData.categoryId+getAdsData.townId+getAdsData.pageSize' +
        '+getAdsData.startPage+getAdsData.status+getAdsData.order',
        function() {
            getAds();
        });

    $scope.approveAd = function(id) {
        adminAdsData.approveOrRejectAd(id, 'Approve').$promise
            .then(function(data) {
                noty.yes(data.message);
            });
    };

    $scope.rejectAd = function(id) {
        adminAdsData.approveOrRejectAd(id, 'Reject').$promise
            .then(function(data) {
                noty.yes(data.message);
            });
    };

    function getAds() {
        adminAdsData.getAds($scope.getAdsData).$promise
            .then(function(data) {
                $scope.ads = data.ads;
                $scope.pagingData.numPages = data.numPages;
            });
    }
});
