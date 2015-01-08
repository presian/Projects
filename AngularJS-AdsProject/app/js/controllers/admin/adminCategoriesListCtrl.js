'use strict';

app.controller('AdminCategoriesListCtrl', function($scope, adminCategoriesData) {
    $scope.getCategoriesData = {
        pageSize: 5,
        startPage: 1,
        order: ''
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.$watch('pagingData.currentPage', function(newValue) {
        $scope.getCategoriesData.startPage = newValue;
        getCategories();
    });

    $scope.$watch('getCategoriesData.order+getCategoriesData.startPage', function() {
        getCategories();
    });



    function getCategories() {
        adminCategoriesData.getCategories($scope.getCategoriesData).$promise
            .then(function(data) {
                $scope.categories = data.categories;
                $scope.pagingData.numPages = data.numPages;
            });
    }
});
