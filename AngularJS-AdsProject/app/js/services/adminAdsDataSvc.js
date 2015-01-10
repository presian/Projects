'use strict';

app.factory('adminAdsDataSvc', function($resource, $cookieStore, $http, BASE_URL) {
    var token = $cookieStore.get('token');
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'admin/ads/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    function getAds(data) {
        var token = $cookieStore.get('token');
        $http.defaults.headers.common.Authorization = 'Bearer ' + token;
        var res = $resource(
            BASE_URL + 'admin/ads?Status=' + data.status + '&CategoryId=' + data.categoryId +
            '&TownId=' + data.townId + '&SortBy=' + data.order +
            '&StartPage=' + data.startPage + '&PageSize=' + data.pageSize);
        return res.get();
    }

    function approveOrRejectAd(adId, type) {
        var res = $resource(
            BASE_URL + 'admin/ads/' + type + '/:id', {
                id: '@id'
            }, {
                update: {
                    method: 'PUT'
                }
            });

        return res.update({
            id: adId
        });
    }

    function getAd(id) {
        return resource.get({
            id: id
        });
    }

    function editAd(id, ad) {
        return resource.update({
            id: id
        }, ad);
    }

    function deleteAd(id) {
        return resource.delete({
            id: id
        });
    }

    return {
        getAds: getAds,
        approveOrRejectAd: approveOrRejectAd,
        getAd: getAd,
        editAd: editAd,
        del: deleteAd
    };
});
