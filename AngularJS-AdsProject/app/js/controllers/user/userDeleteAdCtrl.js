'use strict';

app.controller('UserDeleteAdCtrl', function($scope, $location, $routeParams, userAdsData, authChecker, noty) {
    authChecker.checkUser();
    $scope.ad = userAdsData.getById($routeParams.id);
    $scope.deleteAd = function() {
        userAdsData.delete($routeParams.id).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('/user/ads');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
