'use strict';

app.factory('publicAdsDataSvc', function($resource, BASE_URL) {

    function getAllAds(getAdsData) {
        var url = BASE_URL + 'ads?CategoryId=' + getAdsData.category +
            '&TownId=' + getAdsData.town +
            '&StartPage=' + getAdsData.startPage +
            '&PageSize=' + getAdsData.pageSize;
        return $resource(url).get();
    }

    return {
        get: getAllAds
    };
});
