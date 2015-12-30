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
/**
 *
 * ExpandingCards is a directive
 * A list of expanding cards
 * @param objects  the json object of cards that will be shown in the list.
 */
app.directive('expandingCards', function () {
    return {
        scope: {
            objects: "="
        },
        templateUrl: 'directives/expanding_cards/expanding_cards.html'
    };
});