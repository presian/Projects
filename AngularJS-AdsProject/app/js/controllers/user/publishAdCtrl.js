'use strict';

app.controller('PublishAdCtrl', function($scope, $location, categoryData, townsData, userAdsData) {
    $scope.adData = {
        title: '',
        text: '',
        imageDataUrl: '',
        categoryId: null,
        townId: null
    };

    $scope.towns = townsData.query();
    $scope.categories = categoryData.query();

    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                $("#ad-image").html("<img src='" + reader.result + "'>");
                $('#imageName').attr('value', file.name);
            };
            reader.readAsDataURL(file);
        } else {
            $('#imageName').attr('value', '');
            $('#ad-image').html('<p>File type not supported!</p>');
        }
    };

    $scope.publishingAd = function() {
        userAdsData.create($scope.adData).$promise
            .then(function() {
                $location.path('user/home');
            }, function(error) {
                console.log(error.data.error_description);
            });
    };
});
