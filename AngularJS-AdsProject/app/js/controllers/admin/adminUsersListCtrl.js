'use strict';

app.controller('AdminUsersListCtrl', function($scope, adminUsersDataSvc, $cookieStore, authenticationSvc) {

    authenticationSvc.checkAdmin();
    $scope.pageTitle = 'Users';
    $scope.getUsersData = {
        pageSize: 20,
        startPage: 1,
        order: ''
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.$watch('pagingData.currentPage', function(newValue) {
        $scope.getUsersData.startPage = newValue;
        getUsers();
    });

    $scope.$watch('getUsersData.order+getUsersData.startPage', function() {
        getUsers();
    });

    $scope.getCurrentUser = function(currentUser) {
        $cookieStore.put('editedUser', currentUser);
    };


    function getUsers() {
        adminUsersDataSvc.getUsers($scope.getUsersData).$promise
            .then(function(data) {
                $scope.users = data.users;
                $scope.pagingData.numPages = data.numPages;
            });
    }
});
