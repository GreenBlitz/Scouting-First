/**
 * Created by tomer on 12/26/15.
 */
app.controller('SearchPageController', function ($scope, $rootScope) {
    if ($rootScope.searched == null) {
        $rootScope.changeView($rootScope.buttons[0]);
    }

});

