/**
 * Created by tomer on 12/25/15.
 */
app.directive('toolBar', function () {
    return {
        scope: {
            withsearch: "=withsearch"
        },
        templateUrl: 'directives/header/toolbar.html'
    };
});