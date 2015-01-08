'use strict';

app.controller('AdminTownsListCtrl', function($scope, adminTownsData) {
    $scope.getTownsData = {
        pageSize: 5,
        startPage: 1,
        order: ''
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.$watch('pagingData.currentPage', function(newValue) {
        $scope.getTownsData.startPage = newValue;
        getTowns();
    });

    $scope.$watch('getTownsData.order+getTownsData.startPage', function() {
        getTowns();
    });



    function getTowns() {
        adminTownsData.getTowns($scope.getTownsData).$promise
            .then(function(data) {
                $scope.towns = data.towns;
                $scope.pagingData.numPages = data.numPages;
            });
    }
});
