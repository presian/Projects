'use strict';

app.controller('AdminEditTownCtrl', function($scope, $location, $routeParams, noty, adminTownsData) {
    $scope.town = {
        name: $routeParams.name
    };

    $scope.editTown = function() {
        adminTownsData.editTown($routeParams.id, $scope.town).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/towns/list');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
