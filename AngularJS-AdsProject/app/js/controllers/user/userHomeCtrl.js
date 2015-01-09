'use strict';

app.controller('UserHomeCtrl', function($scope, authenticationSvc) {
    authenticationSvc.checkUser();
    $scope.pageTitle = 'Home';
});
