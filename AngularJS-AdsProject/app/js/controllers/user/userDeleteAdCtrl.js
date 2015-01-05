'use strict';

app.controller('UserDeleteAdCtrl', function($scope, $location, $routeParams, userAdsData, authChecker) {
    authChecker.checkUser();
    $scope.ad = userAdsData.getById($routeParams.id);
    $scope.deleteAd = function() {
        userAdsData.delete($routeParams.id).$promise
            .then(function(data) {
                //TODO: succesMessage
                $location.path('/user/ads');
            }, function(error) {
                //TODO: errorMessage
            });
    };
});
