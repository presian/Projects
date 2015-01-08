'use strict';

app.controller('AdminUsersListCtrl', function($scope, adminUsersData) {

    $scope.getAdsData = {
        pageSize: 20,
        startPage: 1,
        order: ''
    };

    $scope.pagingData = {
        currentPage: 1,
        numPages: '',
    };

    $scope.$watch('getAdsData.order+getAdsData.startPage', function() {
        getUsers();
    });



    function getUsers() {
        adminUsersData.getUsers($scope.getAdsData).$promise
            .then(function(data) {
                $scope.users = data.users;
            });
    }
});
