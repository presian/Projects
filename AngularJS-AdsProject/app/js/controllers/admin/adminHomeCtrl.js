'use strict';

app.controller('AdminHomeCtrl', function($scope, authenticationSvc,
    adminAdsDataSvc, categoriesAndTownsDataSvc, noty, $route) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Ads';
    $scope.towns = categoriesAndTownsDataSvc.getTowns();
    $scope.categories = categoriesAndTownsDataSvc.getCategories();
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

    $scope.statusFilter = {
        status: ''
    };

    $scope.$watch('statusFilter.status', function(newValue) {
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
        adminAdsDataSvc.approveOrRejectAd(id, 'Approve').$promise
            .then(function(data) {
                noty.yes(data.message);
                $route.reload();
            }, function(error) {
                noty.no(error, 'Action failed, please try again later!');
            });
    };

    $scope.rejectAd = function(id) {
        adminAdsDataSvc.approveOrRejectAd(id, 'Reject').$promise
            .then(function(data) {
                noty.yes(data.message);
                $route.reload();
            }, function(error) {
                noty.no(error, 'Action failed, please try again later!');
            });
    };

    function getAds() {
        adminAdsDataSvc.getAds($scope.getAdsData).$promise
            .then(function(data) {
                $scope.ads = data.ads;
                $scope.pagingData.numPages = data.numPages;
            }, function(error) {
                noty.no(error, 'Cannot load data, please try again later!');
            });
    }
});
