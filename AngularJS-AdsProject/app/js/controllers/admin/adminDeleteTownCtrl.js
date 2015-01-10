'use strict';

app.controller('AdminDeleteTownCtrl', function($scope, $location, $routeParams, noty,
    adminTownsDataSvc, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Delete town';
    $scope.town = {
        name: $routeParams.name
    };

    $scope.deleteTown = function() {
        adminTownsDataSvc.deleteTown($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/towns/list');
            }, function(error) {
                noty.no(error, 'Deleting failed, please try again!');
            });
    };
});
