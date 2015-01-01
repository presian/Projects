'use strict';

startView.factory('categoryDataFactory', function($resource, BASE_URL) {
    return $resource(BASE_URL + 'Categories');
});
