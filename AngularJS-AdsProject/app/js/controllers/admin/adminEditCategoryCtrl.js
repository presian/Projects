'use strict';

app.controller('AdminEditCategoryCtrl', function($scope, $location, $routeParams,
    noty, adminCategoriesDataSvc, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Edit category';
    $scope.category = {
        name: $routeParams.name
    };

    $scope.editCategory = function() {
        adminCategoriesDataSvc.editCategory($routeParams.id, $scope.category).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/categories/list');
            }, function(error) {
                noty.no('Editing failed, please try again later!');
            });
    };
});
