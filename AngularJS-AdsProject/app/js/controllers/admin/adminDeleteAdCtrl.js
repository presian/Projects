'use strict';

app.controller('AdminDeleteAdCtrl', function($scope, adminAdsDataSvc, $routeParams,
    noty, $location, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Delete ad';
    $scope.ad = adminAdsDataSvc.getAd($routeParams.id);

    $scope.deleteCurrentAd = function() {
        adminAdsDataSvc.del($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/home');
            }, function(error) {
                noty.no(error, 'Deleting failed, please try again later!');
            });
    };
});
