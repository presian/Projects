'use strict';

app.factory('noty', function(Notification) {
    function success(text) {
        Notification.success({
            message: text,
            delay: 3000
        });
    }

    function error(text) {
        Notification.error({
            message: text,
            delay: 3000
        });
    }
    return {
        yes: success,
        no: error
    };
});
