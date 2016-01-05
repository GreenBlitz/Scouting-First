/**
 * Created by tomer on 12/24/15.
 */
app.directive('navButton', function () {
    return {
        restrict: 'E',
        scope: {
            icon: '=',
            name: '=',
            view: '=',
            current: '=',
            settings: '='
        },
        templateUrl: 'directives/nav/navbutton.html'
    };
});