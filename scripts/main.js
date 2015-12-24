var app = angular.module('ScoutingFirst', ['ngMaterial']).config(function () {
});

app.controller('MainController', function ($scope, $timeout, $q, $log) {

    $scope.simulateQuery = false;

    // list of `state` value/display objects


    $scope.newState = function (state) {
        alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    };

    $scope.querySearch = function (query) {
        var results = query ? $scope.loadAll().filter(createFilterFor(query)) : $scope.loadAll(),
            deferred;
        if ($scope.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    };

    $scope.searchTextChange = function (text) {
        $log.info('Text changed to ' + text);
    };

    $scope.selectedItemChange = function (item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    };

    /**
     * Build `states` list of key/value pairs
     */
    $scope.loadAll = function () {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

        return allStates.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    };

    //$scope.states = loadAll();

    $scope.createFilterFor = function (query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }
});