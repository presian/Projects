'use strict';

app.controller('AdminEditCategoryCtrl', function($scope, $location, $routeParams, noty, adminCategoriesData) {
    $scope.category = {
        name: $routeParams.name
    };

    $scope.editCategory = function() {
        adminCategoriesData.editCategory($routeParams.id, $scope.category).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/categories/list');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
