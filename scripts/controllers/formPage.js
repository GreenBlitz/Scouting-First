/**
 * Created by user on 1/5/2016.
 */
app.controller('FormPage', function ($scope,$rootScope) {
    if ($rootScope.searched == null) {
        $rootScope.changeView($rootScope.buttons[0]);
    }
    $scope.myRadios = ["One","Two"];



    $scope.team_name = "Team Name"
});