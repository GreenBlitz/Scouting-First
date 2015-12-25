app.controller('MainController', function ($scope,$rootScope) {
    $scope.buttons = [
        {
            name: "Home",
            icon: "home",
            view: "home",
            current: true
        },
        {
            name: "Table",
            icon: "table",
            view: "table"
        },
        {
            name: "Settings",
            icon: "settings",
            view: "settings",
            settings : true
        }
    ];
    $rootScope.view = "views/"+$scope.buttons[0].view+".html";
});