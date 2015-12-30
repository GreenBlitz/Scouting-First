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
 * Every 'object' should contain 'title' the title of the card, 'short' short text to show when the card is closed, 'view' the html view to show when the card is open
 */
app.directive('expandingCards', function () {
    return {
        scope: {
            objects: "="
        },
        templateUrl: 'directives/expanding_cards/expanding_cards.html'
    };
});