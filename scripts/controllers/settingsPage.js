/**
 * Created by tomer on 12/26/15.
 */
app.controller('SettingsController', function ($scope, $rootScope,$log) {
    if ($rootScope.limitSearch) {
        $rootScope.country = "Israel";
    }
    else {
        $rootScope.country = null;
    }
    $scope.onLimitSearchChange = function (cbState) {
        console.log("cbstate" +cbState)
        $rootScope.country = cbState ? "Israel" : null;
        $rootScope.loadData()
    };
});