/**
 * Created by tomer on 1/20/16.
 */
app.directive('loader', function () {
    return {
        scope: {
            active: "="
        },
        templateUrl: 'directives/header/loader.html'
    };
});