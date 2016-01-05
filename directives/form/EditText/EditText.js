app.directive('editText', function () {
    return {
        scope: {
            identifier: "=",
            title: "=",
            holder: "=",
            type: "="
        },
        templateUrl: 'directives/form/EditText/edit_text.html'
    };
});