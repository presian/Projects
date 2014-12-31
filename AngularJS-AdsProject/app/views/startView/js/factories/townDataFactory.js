'use strict';

startView.factory('townsDataFactory', function($resource) {
    return $resource('http://localhost:1337/api/Towns');
});
