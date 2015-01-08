'use strict';

app.controller('AdminCreateCategoryCtrl', function($scope, $location, adminCategoriesData, noty) {
    $scope.category = {
        name: ''
    };

    $scope.createCategory = function() {
        adminCategoriesData.createCategory($scope.category).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/categories/list');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
