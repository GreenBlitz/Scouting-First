/**
 * Created by tomer on 12/24/15.
 */
var app = angular.module('ScoutingFirst', ['ngMaterial']).config(function ($mdThemingProvider) {

        var primary = $mdThemingProvider.extendPalette('green', {
        });
        var accent = $mdThemingProvider.extendPalette('orange', {
        });

        $mdThemingProvider.definePalette('primary', primary);
        $mdThemingProvider.definePalette('accent', accent);

        $mdThemingProvider.theme('default')
            .primaryPalette('primary')
            .accentPalette('accent')
    }
);