'use strict';

app.controller('AdsCtrl', function($scope, allAdsData, $cookieStore, $location) {

    if ($cookieStore.get('username')) {
        $location.path('/user/home');
    }

    $scope.$parent.$watch('getAdsData.townFilter+getAdsData.categoryFilter+getAdsData.pageSize',
        function() {
            getAds($scope.$parent.getAdsData);
        }
    );

    $scope.$parent.$watch('pagingData.currentPage',
        function(newValue) {
            var currPageData = $scope.$parent.getAdsData;
            currPageData.startPage = newValue;
            getAds(currPageData);
        }
    );

    function getAds(getData) {
        allAdsData.get(getData).$promise
            .then(function(data) {
                $scope.$parent.ads = data.ads;
                $scope.$parent.pagingData.numPages = data.numPages;
            });
    }

});
