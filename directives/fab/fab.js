/**
 * Created by tomer on 12/24/15.
 */
app.directive('fab', function ($mdMedia) {
    return {
        scope: {
            action: "="
        },
        templateUrl: $mdMedia('gt-sm') ? 'directives/fab/fab_large.html' : 'directives/fab/fab.html'
    };
});