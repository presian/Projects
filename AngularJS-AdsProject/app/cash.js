    $scope.selectedFilters = {
        townFilter: {
            id: '!',
            name: ''
        },
        categoryFilter: {
            id: '!',
            name: ''
        }
    };

    var ads,
        numPages,
        adsDataFactory.get().$promise
        .then(function(data) {

            ads = data.ads;
            $scope.filtrateData = ads;
            $scope.pageInfo = {
                bigCurrentPage: 1,
                bigTotalItems: $scope.filtrateData.length,
                adsPerPage: 2
            };
        });

    $scope.$watch('selectedFilters.townFilter.id + " " + selectedFilters.categoryFilter.id',
        function(newValue) {
            if (ads) {
                var categoryFilter,
                    townFilter;
                var filters = newValue.split(' ');

                if (filters[0] === '!') {
                    townFilter = filters[0];
                } else {
                    townFilter = parseInt(filters[0]);
                }

                if (filters[1] === '!') {
                    categoryFilter = filters[1];
                } else {
                    categoryFilter = parseInt(filters[1]);
                }

                $scope.filtrateData = $filter('filter')(ads, {
                    categoryId: categoryFilter,
                    townId: townFilter
                }, true);
            }
        }
    );

    $scope.$watch('filtrateData',
        function(newValue, oldValue) {
            if (newValue) {
                $scope.pageInfo.bigTotalItems = newValue.length;
            }
        }
    );

    $scope.$watch('pageInfo.bigCurrentPage + filtrateData', function() {
        if ($scope.filtrateData) {
            var begin = (($scope.pageInfo.bigCurrentPage - 1) * $scope.pageInfo.adsPerPage),
                end = begin + $scope.pageInfo.adsPerPage;
            $scope.filtrateAds = $scope.filtrateData.slice(begin, end);
        }
    });
