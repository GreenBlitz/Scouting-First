/**
 * Created by tomer on 12/24/15.
 */
var app = angular.module('ScoutingFirst', ['ngMaterial']).config(
    function ($mdThemingProvider) {

        Parse.initialize("EaMjvT3JK7GtQVYbYvq2oiePuHoTXtnLY2mkOTWU", "6GCClBRE5eXpzvwOKLiaWCTZBJ3jjZDcYM6TmWxY");

        var primary = $mdThemingProvider.extendPalette('green', {});
        var accent = $mdThemingProvider.extendPalette('red', {});

        $mdThemingProvider.definePalette('primary', primary);
        $mdThemingProvider.definePalette('accent', accent);

        $mdThemingProvider.theme('default')
            .primaryPalette('primary')
            .accentPalette('accent');
    }
);