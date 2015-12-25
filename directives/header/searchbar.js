/**
 * Created by tomer on 12/24/15.
 */
app.controller('SearchController', function ($scope, $rootScope, $http, $filter) {

    $scope.teams = undefined;
    for (var i = 0; i < 12; i++) {
        loadAll(i)
    }

    function loadAll(index) {
        $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/teams/' + index,
            headers: {
                'X-TBA-App-Id': 'greenblitz:scouting-system:v01'
            }
        }).then(function successCallback(response) {
            for (var i = 0; i < response.data.length; i++) {
                if ($scope.isStringEmpty(response.data[i].name)) {
                    console.log("remove " + i);
                    response.data.splice(i, 1);
                }
            }
            console.log(response.data);
            if ($scope.teams == null) {
                $scope.teams = response.data
            }
            else {
                addArrayTo(response.data, $scope.teams)
            }

            $rootScope.teams += $scope.teams;
        }, function errorCallback(response) {
            return response;
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getMatches = function (text) {
        return $filter('filter')($scope.teams, text)
    };

    $scope.isStringEmpty = function (string) {
        return string == null || !string || 0 === string.length
    };

    $scope.nameOrNickname = function (item) {
        return $scope.isStringEmpty(item.nickname) ? item.name : item.nickname
    };

    function addArrayTo(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            arr2.push(arr1[i])
        }
    }

    $scope.search = function (button) {
        $rootScope.searched = $scope.selectedItem;
        console.log($rootScope.searched);
        $rootScope.changeView(button);
    }
});
app.directive('searchBar', function () {
    return {
        templateUrl: 'directives/header/searchbar.html'
    };
});
