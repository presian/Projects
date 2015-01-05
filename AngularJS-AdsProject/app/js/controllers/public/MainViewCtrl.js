'use strict';

app.controller('MainCtrl', function($scope, authChecker) {
    authChecker.checkUser();
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
});
