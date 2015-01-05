'use strict';

app.factory('authChecker', function($location, $cookieStore) {
    function checkUser() {
        var path = $location.path();
        var indexUser = path.indexOf('user');
        var indexAdmin = path.indexOf('admin');
        if (indexUser >= 0 || indexAdmin >= 0) {
            var token = $cookieStore.get('token');
            if (!token) {
                $location.path('/');
            }
        }
    }
    return {
        checkUser: checkUser
    };
});
