/**
 * Created by user on 1/5/2016.
 */
app.directive('spinner', function () {
    return {
        scope: {
            identifier: "=",
            title: "=",
            options: "="
        },
        templateUrl: 'directives/form/Select/select.html'
    };
});