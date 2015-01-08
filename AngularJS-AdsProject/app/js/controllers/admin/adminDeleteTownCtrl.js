'use strict';

app.controller('AdminDeleteTownCtrl', function($scope, $location, $routeParams, noty, adminTownsData) {
    $scope.town = {
        name: $routeParams.name
    };

    $scope.deleteTown = function() {
        adminTownsData.deleteTown($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/towns/list');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
