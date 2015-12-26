/**
 * Created by tomer on 12/25/15.
 */
app.directive('toolBar', function ($mdMedia) {
    return {
        scope: {
            withsearch: "=withsearch"
        },
        templateUrl: $mdMedia('gt-sm') ? 'directives/header/toolbar_large.html': 'directives/header/toolbar.html'
    };
});