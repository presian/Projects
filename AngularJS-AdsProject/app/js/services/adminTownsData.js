'use strict';

app.factory('adminTownsData', function($http, $cookieStore, $resource, BASE_URL) {

    var token = $cookieStore.get('token');
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'admin/towns/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    function getTowns(data) {
        var resource = $resource(
            BASE_URL + 'admin/Towns?SortBy=' + data.order + '&StartPage=' + data.startPage +
            '&PageSize=' + data.pageSize);
        return resource.get();
    }

    function createTown(name) {
        return resource.save({
            id: null
        }, name);
    }

    function editTown(id, name) {
        return resource.update({
            id: id
        }, name);
    }

    function deleteTown(id) {
        return resource.delete({
            id: id
        });
    }

    return {
        getTowns: getTowns,
        createTown: createTown,
        editTown: editTown,
        deleteTown: deleteTown
    };
});
