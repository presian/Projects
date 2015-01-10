'use strict';

app.controller('AdminCreateCategoryCtrl', function($scope, $location,
    adminCategoriesDataSvc, noty, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Create category';
    $scope.category = {
        name: ''
    };

    $scope.createCategory = function() {
        adminCategoriesDataSvc.createCategory($scope.category).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/categories/list');
            }, function(error) {
                noty.no(error, 'Creating failed, please try again later!');
            });
    };
});
