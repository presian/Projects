'use strict';

app.factory('categoryData', function($resource, BASE_URL) {
    return $resource(BASE_URL + 'Categories');
});
