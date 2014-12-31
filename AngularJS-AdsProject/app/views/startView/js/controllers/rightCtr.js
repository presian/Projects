'use strict';

startView.controller('rightCtr', function($scope, townsDataFactory, categoryDataFactory) {
    var townsData = townsDataFactory.query();
    var categoriesData = categoryDataFactory.query();

    $scope.townsData = townsData;
    $scope.$parent.townsData = townsData;

    $scope.categoriesData = categoriesData;
    $scope.$parent.categoriesData = categoriesData;

    $scope.setCategoryFilter = setCategoryFilter;
    $scope.setTownFilter = setTownFilter;

    function setCategoryFilter(category) {
        if (category === '') {
            $scope.$parent.selectedFilters.categoryFilter.id = '!';
            $scope.$parent.selectedFilters.categoryFilter.name = '';
        } else {
            $scope.$parent.selectedFilters.categoryFilter.id = category.id;
            $scope.$parent.selectedFilters.categoryFilter.name = category.name;
        }
    }

    function setTownFilter(town) {
        if (town === '') {
            $scope.$parent.selectedFilters.townFilter.id = '!';
            $scope.$parent.selectedFilters.townFilter.name = '';
        } else {
            $scope.$parent.selectedFilters.townFilter.id = town.id;
            $scope.$parent.selectedFilters.townFilter.name = town.name;
        }
    }
});
