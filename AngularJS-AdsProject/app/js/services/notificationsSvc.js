'use strict';

app.factory('noty', function(Notification) {
    function success(text) {
        Notification.success({
            message: text,
            delay: 3000
        });
    }

    function error(respond, text) {
        var output = '';
        if (respond.data) {
            if (respond.data.modelState) {
                if (respond.data.modelState[Object.keys(respond.data.modelState)[0]][1]) {
                    output = respond.data.modelState[Object.keys(respond.data.modelState)[0]][1];
                } else {
                    output = respond.data.modelState[Object.keys(respond.data.modelState)[0]][0];
                }
            } else if (respond.data.error_description) {
                output = respond.data.error_description;
            } else if (respond.data.message) {
                output = respond.data.message;
            } else {
                output = text;
            }
        } else {
            output = text;
        }
        Notification.error({
            message: output,
            delay: 3000
        });
    }

    return {
        yes: success,
        no: error
    };
});
