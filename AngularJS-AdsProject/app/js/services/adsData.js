'use strict';

app.factory('allAdsData', function($resource, BASE_URL) {

    function getAllAds(getAdsData) {
        var url = BASE_URL + 'ads?CategoryId=' + getAdsData.categoryFilter +
            '&TownId=' + getAdsData.townFilter +
            '&StartPage=' + getAdsData.startPage +
            '&PageSize=' + getAdsData.pageSize;
        return $resource(url).get();
    }

    return {
        get: getAllAds
    };
});
