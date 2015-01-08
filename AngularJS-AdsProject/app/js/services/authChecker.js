'use strict';

app.factory('authChecker', function($location, $cookieStore) {

    function checkUser() {
        var token = $cookieStore.get('token');
        var isAdmin = $cookieStore.get('isAdmin');
        var path = $location.path();
        var indexAdmin = path.indexOf('admin');
        var indexUser = path.indexOf('user');
        if ((indexUser >= 0 || indexAdmin >= 0) && !token) {
            $location.path('/');
        } else if (indexAdmin >= 0 && !isAdmin && token) {
            $location.path('/user/home');
        }
    }

    return {
        checkUser: checkUser
    };
});
