/**
 * Created by tomer on 12/26/15.
 */
app.controller('SettingsController', function ($scope, $rootScope) {
    if($rootScope.limitSearch == undefined){
        $rootScope.limitSearch = true;
    }
});