'use strict';

app.controller('UserEditAdCtrl', function($scope, $routeParams, $location, userAdsData, townsData, categoryData, authChecker) {
    authChecker.checkUser();
    $scope.ad = userAdsData.getById($routeParams.id);
    $scope.towns = townsData.query();
    $scope.categories = categoryData.query();

    $scope.fileSelected = function(fileInputField) {
        delete $scope.ad.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.ad.imageDataUrl = reader.result;
                $scope.ad.changeImage = true;
                $("#ad-image").html("<img src='" + reader.result + "'>");
                $('#imageName')
                    .html('<input type="text" class="form-control" placeholder="Image url" disabled="disabled" value="' +
                        file.name + '">');
            };
            reader.readAsDataURL(file);
        } else {
            $('#imageName').attr('value', '');
            $('#ad-image').html('<p>File type not supported!</p>');
        }
    };

    $scope.deleteImage = function() {
        $scope.ad.imageDataUrl = '';
        $scope.ad.changeImage = true;
        $('#ad-image').html('<img ng-src="{{ad.imageDataUrl}}">');
        $('#imageName').html('');
    };

    $scope.editCurrentAd = function() {
        if ($scope.ad.categoryId === 'null') {
            $scope.ad.categoryId = null;
        }

        if ($scope.ad.townId === 'null') {
            $scope.ad.townId = null;
        }

        userAdsData.edit($routeParams.id, $scope.ad).$promise
            .then(function(data) {
                $location.path('/user/ads');
                //TODO: successMesage
            }, function(error) {
                //TODO: errorMesage
            });
    }

});
