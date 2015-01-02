'use strict';

startView.controller('rightCtr', function($scope, categoryData, townsData) {
    $scope.townsData = townsData.query();
    $scope.categoriesData = categoryData.query();
});
