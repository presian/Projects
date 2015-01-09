'use strict';

app.factory('userAdsDataSvc', function($resource, $cookieStore, $http, BASE_URL) {
    var token = $cookieStore.get('token');
    $http.defaults.headers.common.Authorization = 'Bearer ' + token;

    var resource = $resource(
        BASE_URL + 'user/ads/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });


    function getFilteredAds(statusFilter, startPage) {
        var res = $resource(
            BASE_URL + 'user/ads?Status=' + statusFilter.status + '&StartPage=' + startPage + '&PageSize=3');
        return res.get();
    }

    function deactivateOrPublisAd(adId, type) {
        var res = $resource(
            BASE_URL + 'user/ads/' + type + '/:id', {
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

    // function getAllAds() {
    //     return resource.get();
    // }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id) {
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
        deactivateOrPublisAd: deactivateOrPublisAd,
        getFilteredAds: getFilteredAds,
        // getAll: getAllAds,
        create: createNewAd,
        getById: getAdById,
        edit: editAd,
        delete: deleteAd
    };
});
