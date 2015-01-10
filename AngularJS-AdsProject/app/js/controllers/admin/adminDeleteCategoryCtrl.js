'use strict';

app.controller('AdminDeleteCategoryCtrl', function($scope, $location, $routeParams, noty,
    adminCategoriesDataSvc, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Delete category';
    $scope.category = {
        name: $routeParams.name
    };

    $scope.deleteCategory = function() {
        adminCategoriesDataSvc.deleteCategory($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/categories/list');
            }, function(error) {
                console.log(error);
                noty.no(error, 'Deleting failed, please try again later!');
            });
    };
});
