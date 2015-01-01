'use strict';

startView.controller('MainCtr', function($scope, $filter, adsDataFactory) {

    $scope.getAdsData = {
        categoryFilter: '',
        townFilter: '',
        pageSize: 2,
        startPage: 1
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.$watch('getAdsData.townFilter+getAdsData.categoryFilter+getAdsData.pageSize',
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
        adsDataFactory.get(getData).$promise
            .then(function(data) {
                $scope.ads = data.ads;
                $scope.pagingData.numPages = data.numPages;
            });
    }

});
