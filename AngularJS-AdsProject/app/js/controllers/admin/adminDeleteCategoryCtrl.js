'use strict';

app.controller('AdminDeleteCategoryCtrl', function($scope, $location, $routeParams, noty, adminCategoriesData) {
    $scope.category = {
        name: $routeParams.name
    };

    $scope.deleteCategory = function() {
        adminCategoriesData.deleteCategory($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/categories/list');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
