'use strict';

startView.factory('categoryDataFactory', function($resource) {
    return $resource('http://localhost:1337/api/Categories');
});
