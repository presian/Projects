'use strict';

startView.controller('rightCtr', function($scope, townsDataFactory, categoryDataFactory) {
    $scope.townsData = townsDataFactory.query();
    $scope.categoriesData = categoryDataFactory.query();
});
