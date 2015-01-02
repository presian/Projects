'use strict';

app.factory('townsData', function($resource, BASE_URL) {
    return $resource(BASE_URL + 'Towns');
});
