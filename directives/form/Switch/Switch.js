/**
 * Created by user on 1/5/2016.
 */
app.directive('switch', function () {
    return {
        scope: {
            identifier: "=",
            title: "="
        },
        templateUrl: 'directives/form/Switch/switch.html'
    };
});