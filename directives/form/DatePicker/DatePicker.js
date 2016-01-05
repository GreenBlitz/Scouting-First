/**
 * Created by user on 1/5/2016.
 */
app.directive('datePicker', function () {
    return {
        scope: {
            identifier: "=",
            holder: "="
        },
        templateUrl: 'directives/form/DatePicker/date_picker.html'
    };
});