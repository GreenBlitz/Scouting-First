/**
 * Created by tomer on 12/24/15.
 */
app.controller('SearchController', function ($scope, $rootScope, $http, $filter) {

    $scope.getMatches = function (text) {
        return $filter('filter')($scope.teams, text)
    };

    $scope.nameOrNickname = function (item) {
        return $rootScope.isStringEmpty(item.nickname) ? item.name : item.name
    };

    $rootScope.setItem = function (team) {
        $scope.selectedItem = team;
    };

    $scope.search = function (button) {
        if ($scope.selectedItem != null) {
            $rootScope.searched = $scope.selectedItem;
            $rootScope.teamrank = "(Loading)";
            $rootScope.teamavg = "(Loading)";
            $rootScope.objects = [];
            console.log($rootScope.searched);
            $rootScope.loadMatches($rootScope.searched.team_number);
            $rootScope.loadRankForTeam($rootScope.searched.team_number);
            $rootScope.changeView(button);
            $rootScope.toggleSideNav()
        }
    }
});
app.directive('searchBar', function () {
    return {
        templateUrl: 'directives/header/searchbar.html'
    };
});
