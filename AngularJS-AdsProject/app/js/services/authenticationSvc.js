'use strict';

app.factory('authenticationSvc', function($location, $cookieStore, noty) {

    function checkUser() {
        var token = $cookieStore.get('token');
        var isAdmin = $cookieStore.get('isAdmin');
        var path = $location.path();
        var indexUser = path.indexOf('user');
        if (indexUser >= 0 && !token) {
            $location.path('/');
            window.location.reload();
        } else if (indexUser >= 0 && isAdmin) {
            $location.path('/admin/home');
            window.location.reload();
        }
    }

    function checkAdmin() {
        var token = $cookieStore.get('token');
        var isAdmin = $cookieStore.get('isAdmin');
        var path = $location.path();
        var indexAdmin = path.indexOf('admin');
        if (indexAdmin >= 0 && !isAdmin) {
            if (token) {
                $location.path('/user/home');
                window.location.reload();
            } else {
                $location.path('/');
                window.location.reload();
            }
        }
    }

    function checkLogin() {
        var token = $cookieStore.get('token');
        var isAdmin = $cookieStore.get('isAdmin');
        var username = $cookieStore.get('username');
        var path = $location.path();
        if (((path === '/') && (token && !isAdmin)) ||
            ((path === '/login') && (token && !isAdmin)) ||
            ((path === '/register') && (token && !isAdmin))) {
            noty.yes('Hello again ' + username + '!');
            $location.path('/user/home');
        } else if (((path === '/') && isAdmin) ||
            ((path === '/login') && isAdmin) ||
            ((path === '/register') && isAdmin)) {
            noty.yes('Hello again ' + username + '!');
            $location.path('/admin/home');
        }
    }

    return {
        checkUser: checkUser,
        checkAdmin: checkAdmin,
        checkLogin: checkLogin
    };
});
