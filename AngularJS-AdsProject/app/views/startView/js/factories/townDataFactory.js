'use strict';

startView.factory('townsDataFactory', function($resource, BASE_URL) {
    return $resource(BASE_URL + 'Towns');
});
