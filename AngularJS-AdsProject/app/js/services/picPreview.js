'use strict';

app.factory('picPreview', function() {
    function live(fileInputField, ad) {
        delete ad.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                ad.imageDataUrl = reader.result;
                ad.changeImage = true;
                $("#ad-image").html("<img src='" + reader.result + "'>");
                $('#imageName')
                    .html('<input type="text" class="form-control" placeholder="Image url" disabled="disabled" value="' +
                        file.name + '">');
            };
            reader.readAsDataURL(file);
            return ad;
        } else {
            $('#imageName').attr('value', '');
            $('#ad-image').html('<p>File type not supported!</p>');
            return ad;
        }
    }

    function del(ad) {
        ad.imageDataUrl = '';
        ad.changeImage = true;
        $('#ad-image').html('<img ng-src="{{ad.imageDataUrl}}">');
        $('#imageName').html('');
        return ad;
    }

    return {
        live: live,
        del: del
    };
});
