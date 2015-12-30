/**
 * Created by tomer on 12/29/15.
 */
app.controller('ExpandedCard', function ($scope) {
        $scope.selectedUserIndex = undefined;
        $scope.selectUserIndex = function (index) {
            if ($scope.selectedUserIndex !== index) {
                $scope.selectedUserIndex = index;
            }
            else {
                $scope.selectedUserIndex = undefined;
            }
        }
    }
);
app.directive('expandingCards', function () {
    return {
        scope: {
            objects: "="
        },
        templateUrl: 'directives/expanding_cards/expanding_cards.html'
    };
});