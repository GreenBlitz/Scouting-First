/**
 * Created by tomer on 1/20/16.
 */
app.directive('mdTable', function () {
    return {
        restrict: 'E',
        scope: {
            headers: '=',
            sortable: '=',
            filters: '=',
            customClass: '=customClass',
            count: '='
        },
        controller: function ($scope, $filter, $rootScope) {
            var orderBy = $filter('orderBy');
            $scope.tablePage = 0;
            $scope.nbOfPages = function () {
                return Math.ceil($rootScope.ranksFirst.length / $scope.count);
            },
                $scope.handleSort = function (field) {
                    if ($scope.sortable.indexOf(field) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                };
            $scope.order = function (predicate, reverse) {
                $rootScope.ranksFirst = orderBy($rootScope.ranksFirst, predicate, reverse);
                $scope.predicate = predicate;
            };
            $scope.order($scope.sortable[0], false);
            $scope.getNumber = function (num) {
                return new Array(num);
            };
            $scope.goToPage = function (page) {
                $scope.tablePage = page;
            };
        },
        templateUrl: 'directives/table/table.html'
    }
});
app.directive('mdColresize', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$evalAsync(function () {
                $timeout(function () {
                    $(element).colResizable({
                        liveDrag: true,
                        fixed: true

                    });
                }, 100);
            });
        }
    }
});

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
});