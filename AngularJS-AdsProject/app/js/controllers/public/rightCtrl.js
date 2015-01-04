'use strict';

app.controller('RightCtrl', function($scope, categoryData, townsData) {
    $scope.townsData = townsData.query();
    $scope.categoriesData = categoryData.query();
});
