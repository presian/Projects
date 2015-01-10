'use strict';

app.factory('adminUsersDataSvc', function($resource, $cookieStore, $http, BASE_URL) {
    var token = $cookieStore.get('token');
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'admin/user/:username', {
            username: '@username'
        }, {
            update: {
                method: 'PUT'
            }
        });

    function getUsers(getUsersData) {
        var res = $resource(
            BASE_URL + 'admin/Users?SortBy=' + getUsersData.order + '&StartPage=' + getUsersData.startPage +
            '&PageSize=' + getUsersData.pageSize);
        return res.get();
    }

    function getUser(id) {
        return $resource(BASE_URL + 'admin/users/' + id).get();
    }

    function editUser(username, user) {
        return resource.update({
            username: username
        }, user);
    }

    function changePassword(data) {
        var res = $resource(
            BASE_URL + 'admin/setpassword', null, {
                update: {
                    method: 'PUT'
                }
            });
        return res.update(data);
    }

    function deleteUser(username) {
        return resource.delete({
            username: username
        });
    }

    return {
        getUsers: getUsers,
        getUser: getUser,
        editUser: editUser,
        changePassword: changePassword,
        deleteUser: deleteUser
    };
});
