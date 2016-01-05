/**
 * Created by user on 1/5/2016.
 */
app.directive('checkBox', function () {
    return {
        scope: {
            identifier: "=",
            title: "="
        },
        templateUrl: 'directives/form/CheckBox/check_box.html'
    };
});