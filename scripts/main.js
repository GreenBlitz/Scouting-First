app.controller('MainController', function ($scope,$rootScope) {
    $rootScope.buttons = [
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
            name: "Search",
            icon: "search",
            view: "search"
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