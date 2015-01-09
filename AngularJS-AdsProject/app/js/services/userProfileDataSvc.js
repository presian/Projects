'use strict';

app.factory('userProfileDataSvc', function($resource, $cookieStore, $http, BASE_URL) {
    var token = $cookieStore.get('token');

    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'user/:type', {
            type: '@type'
        }, {
            'update': {
                method: 'PUT'
            }
        });

    function getProfileData() {
        return resource.get({
            type: 'profile'
        });
    }

    function update(data, type) {
        return resource.update({
            type: type
        }, data);
    }

    return {
        getProfileData: getProfileData,
        update: update
    };
});
