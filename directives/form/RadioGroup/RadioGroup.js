/**
 * Created by user on 1/5/2016.
 */
app.directive('radioGroup', function () {
    return {
        scope: {
            identifier: "=",
            radios: "="
        },
        templateUrl: 'directives/form/RadioGroup/radio_group.html'
    };
});