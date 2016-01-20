/**
 * Created by tomer on 12/26/15.
 */
app.controller('TablePageController', function ($scope, $rootScope) {
    $rootScope.loadAllRanks();

    $scope.toggleSearch = false;
    $scope.headers = [
        {
            name: 'Position',
            field: 'index'
        }, {
            name: 'Team',
            field: 'team'
        }, {
            name: 'Average',
            field: 'average'
        }
    ];

    $scope.custom = {name: 'bold', description: 'grey', last_modified: 'grey'};
    $scope.sortable = ['index', 'team', 'average'];
    $scope.count = 16;

});