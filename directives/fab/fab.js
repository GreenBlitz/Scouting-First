/**
 * Created by tomer on 12/24/15.
 */
app.directive('fab', function ($mdMedia) {
    return {
        scope: {
            action: "="
        },
        templateUrl: 'directives/fab/fab.html'
    };
});