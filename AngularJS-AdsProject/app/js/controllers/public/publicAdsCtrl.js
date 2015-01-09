'use strict';

app.controller('PublicAdsCtrl', function($scope, publicAdsDataSvc,
    categoriesAndTownsDataSvc, authenticationSvc) {
    authenticationSvc.checkLogin();
    $scope.pageTitle = 'Home';
    $scope.getAdsData = {
        category: '',
        town: '',
        pageSize: 2,
        startPage: 1
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.towns = categoriesAndTownsDataSvc.getTowns();
    $scope.categories = categoriesAndTownsDataSvc.getCategories();

    $scope.$watch('getAdsData.town+getAdsData.category+getAdsData.pageSize',
        function() {
            getAds($scope.getAdsData);
        }
    );

    $scope.$watch('pagingData.currentPage',
        function(newValue) {
            var currPageData = $scope.getAdsData;
            currPageData.startPage = newValue;
            getAds(currPageData);
        }
    );

    function getAds(getData) {
        publicAdsDataSvc.get(getData).$promise
            .then(function(data) {
                $scope.ads = data.ads;
                $scope.pagingData.numPages = data.numPages;
            });
    }

});
