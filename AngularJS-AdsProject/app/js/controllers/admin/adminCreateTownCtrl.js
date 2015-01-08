'use strict';

app.controller('AdminCreateTownCtrl', function($scope, $location, adminTownsData, noty) {
    $scope.town = {
        name: ''
    };

    $scope.createTown = function() {
        adminTownsData.createTown($scope.town).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/towns/list');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
