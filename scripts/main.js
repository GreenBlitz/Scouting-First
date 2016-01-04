app.controller('MainController', function ($scope, $rootScope, $http, $mdMedia) {
        $rootScope.bigScreen = true;

        $scope.objects = [
        {
            title: $rootScope.list,
            short: 'Short1',
            view: "views/home.html"
        },
        {
            title: 'Test1',
            short: 'Short1',
            view: "views/.html"
        }];
        $rootScope.$watch(function () {
            return $mdMedia('gt-sm');
        }, function (big) {
            $rootScope.bigScreen = big;
        });
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
                settings: true
            }
        ];
        $rootScope.country = "Israel";
        $rootScope.limitSearch = true;
        $rootScope.view = "views/" + $scope.buttons[0].view + ".html";
        $rootScope.isStringEmpty = function (string) {
            return string == null || !string || 0 === string.length
        };
        $scope.teams = undefined;

        $rootScope.loadAll = function (index) {
            $http({
                method: 'GET',
                url: 'http://www.thebluealliance.com/api/v2/teams/' + index,
                headers: {
                    'X-TBA-App-Id': 'greenblitz:scouting-system:v01'
                }
            }).then(function successCallback(response) {
                for (var i = 0; i < response.data.length; i++) {

                    if (!$rootScope.isStringEmpty(response.data[i].nickname)) {
                        response.data[i].name = response.data[i].nickname;
                    }
                    if ($rootScope.isStringEmpty(response.data[i].name)) {
                        console.log("remove " + i);
                        response.data.splice(i, 1);
                    }
                }
                console.log(response.data);
                if ($scope.teams == null) {
                    $scope.teams = response.data
                }
                else {
                    addArrayTo(response.data, $scope.teams)
                }
                $rootScope.teams = $scope.teams
            }, function errorCallback(response) {
                return response;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };
        $rootScope.loadMatches = function (team) {
            list = [""];
            $http({
                method: 'GET',
                url: 'http://www.thebluealliance.com/api/v2/event/2015ista/matches',
                headers: {
                    'X-TBA-App-Id': 'greenblitz:scouting-system:v01'
                }
            }).then(function successCallback(response) {
                list = [];
                for (var i = 0; i < response.data.length; i++) {
                    if(response.data[i].alliances.blue.teams.includes("frc"+team)||response.data[i].alliances.red.teams.includes("frc"+team)) {
                        list.push(response.data[i]);
                    }
                }
                $scope.objects = [];
                for(var i = 0; i<list.length; i++){
                    match = list[i];
                    $scope.objects.push({
                        title: "Red "+match.alliances.red.score+" - Blue "+match.alliances.blue.score,
                        short: "Match no."+match.match_number,
                        view: "view/.html"
                    });
                }
                console.log(list);
            }, function errorCallback(response) {
                return response;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };
        $rootScope.loadData = function () {
            $scope.teams = null;
            $rootScope.teams = null;
            for (var i = 0; i < 12; i++) {
                $rootScope.loadAll(i)
            }
            $rootScope.loadMatches(4590);
        }
        ;
        $rootScope.loadData();

        function addArrayTo(arr1, arr2) {
            for (var i = 0; i < arr1.length; i++) {
                arr2.push(arr1[i])
            }
        }
    }
);