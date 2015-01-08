'use strict';

app.controller('AdminDeleteUserCtrl', function($scope, $routeParams, $location, $cookieStore,
    adminUsersData, noty, authChecker) {
    authChecker.checkUser();

    $scope.user = $cookieStore.get('editedUser');
    console.log($scope.user);

    $scope.deleteCurrentUser = function() {
        adminUsersData.deleteUser($routeParams.username).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                // $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no('Houston we have a problem!');
            });
    };
});
