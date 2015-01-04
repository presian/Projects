'use strict';

app.controller('UserEditAdCtrl', function($scope, $routeParams, userAdsData) {
    $scope.ad = userAdsData.getById($routeParams.id);
});
