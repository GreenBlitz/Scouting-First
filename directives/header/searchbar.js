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

    $scope.search = function (button) {
        $rootScope.searched = $scope.selectedItem;
        console.log($rootScope.searched);
        $rootScope.changeView(button);
        $rootScope.toggleSideNav()
    }
});
app.directive('searchBar', function () {
    return {
        templateUrl: 'directives/header/searchbar.html'
    };
});
