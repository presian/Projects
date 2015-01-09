'use strict';

app.factory('categoriesAndTownsDataSvc', function($resource, BASE_URL) {

    function getCategories() {
        return $resource(BASE_URL + 'Categories').query();
    }

    function getTowns() {
        return $resource(BASE_URL + 'Towns').query();
    }

    return {
        getCategories: getCategories,
        getTowns: getTowns
    };
});
