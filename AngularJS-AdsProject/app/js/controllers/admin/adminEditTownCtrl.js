'use strict';

app.controller('AdminEditTownCtrl', function($scope, $location, $routeParams, noty,
    adminTownsDataSvc, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Edit town';
    $scope.town = {
        name: $routeParams.name
    };

    $scope.editTown = function() {
        adminTownsDataSvc.editTown($routeParams.id, $scope.town).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/towns/list');
            }, function(error) {
                noty.no(error, 'Editing failed, please try again later!');
            });
    };
});
