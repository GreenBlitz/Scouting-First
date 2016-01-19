app.directive('editText', function () {
    return {
        scope: {
            identifier: "=",
            title: "=",
            holder: "=",
            type: "=",
            def: "="
        },
        templateUrl: 'directives/form/EditText/edit_text.html'
    };
});