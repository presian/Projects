'use strict';

app.factory('adminCategoriesData', function($http, $cookieStore, $resource, BASE_URL) {

    var token = $cookieStore.get('token');
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'admin/categories/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    function getCategories(data) {
        var res = $resource(
            BASE_URL + 'admin/Categories?SortBy=' + data.order + '&StartPage=' + data.startPage +
            '&PageSize=' + data.pageSize);
        return res.get();
    }

    function createCategory(name) {
        return resource.save({
            id: null
        }, name);
    }

    function editCategory(id, name) {
        return resource.update({
            id: id
        }, name);
    }

    function deleteCategory(id) {
        return resource.delete({
            id: id
        });
    }

    return {
        getCategories: getCategories,
        createCategory: createCategory,
        editCategory: editCategory,
        deleteCategory: deleteCategory
    };
});
