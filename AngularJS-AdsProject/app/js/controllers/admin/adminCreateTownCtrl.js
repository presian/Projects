'use strict';

app.controller('AdminCreateTownCtrl', function($scope, $location, adminTownsDataSvc,
    noty, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Create town';
    $scope.town = {
        name: ''
    };

    $scope.createTown = function() {
        adminTownsDataSvc.createTown($scope.town).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/towns/list');
            }, function(error) {
                noty.no('Creating failed, please try again later!');
            });
    };
});
