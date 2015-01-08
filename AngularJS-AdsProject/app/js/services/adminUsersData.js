'use strict';

app.factory('adminUsersData', function($resource, $cookieStore, $http, BASE_URL) {
    var token = $cookieStore.get('token');
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'admin/users/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    function getUsers(getUsersData) {
        var resource = $resource(
            BASE_URL + 'admin/Users?SortBy=' + getUsersData.order + '&StartPage=' + getUsersData.startPage +
            '&PageSize=' + getUsersData.pageSize);
        return resource.get();
    }
    return {
        getUsers: getUsers
    };
});
