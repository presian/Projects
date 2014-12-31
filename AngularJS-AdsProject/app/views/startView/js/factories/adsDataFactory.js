'use strict';

startView.factory('adsDataFactory', function($resource) {
    return $resource('http://localhost:1337/api/ads');
});
