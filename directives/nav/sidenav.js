/**
 * Created by tomer on 12/24/15.
 */
app.controller('NavCtrl', function ($scope, $mdSidenav, $rootScope, $log) {
    $rootScope.changeView = function (button) {
        $rootScope.view = "views/" + button.view + ".html";
        for (var i = 0; i < $scope.buttons.length; i++) {
            $rootScope.buttons[i].current = false;
        }
        button.current = true;
    };
    $rootScope.toggleSideNav = function () {
        $mdSidenav('sideNav').toggle();
    }
}).directive('sideNav', function () {
    return {
        scope: {
            buttons: '=buttons'
        },
        templateUrl: 'directives/nav/sidenav.html'
    };
});
