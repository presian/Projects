'use strict';

app.controller('AdminDeleteUserCtrl', function($scope, $routeParams, $location, $cookieStore,
    adminUsersDataSvc, noty, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.user = $cookieStore.get('editedUser');
    $scope.pageTitle = 'Delete user';

    $scope.deleteCurrentUser = function() {
        adminUsersDataSvc.deleteUser($routeParams.username).$promise
            .then(function(data) {
                noty.yes(data.message);
                $location.path('admin/users/list');
                // $cookieStore.remove('editedUser');
            }, function(error) {
                noty.no('Deleteing failed, please try again later!');
            });
    };
});
