'use strict';

app.controller('UserDeleteAdCtrl', function($scope, $location, $routeParams,
    userAdsDataSvc, authenticationSvc, noty) {
    authenticationSvc.checkUser();
    $scope.pageTitle = 'Delete Ad';
    $scope.ad = userAdsDataSvc.getById($routeParams.id);
    $scope.deleteAd = function() {
        userAdsDataSvc.delete($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/user/ads');
            }, function(error) {
                noty.no(error, 'Deleting failed, please try again later!');
            });
    };
});
