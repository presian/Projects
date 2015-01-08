'use strict';

app.controller('AdminDeleteAdCtrl', function($scope, adminAdsData, $routeParams, noty, $location) {
    $scope.ad = adminAdsData.getAd($routeParams.id);

    $scope.deleteCurrentAd = function() {
        adminAdsData.del($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/home');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
