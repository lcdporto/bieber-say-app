(function () {
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ui.router',
            'ngResource',
            'satellizer',
            'app.core',
            'app.say'
        ])
        .config(function (
            $urlRouterProvider,
            $mdThemingProvider,
            $resourceProvider,
            $mdIconProvider) {

            $resourceProvider.defaults.stripTrailingSlashes = false;

            $mdThemingProvider.theme('default')
                              .primaryPalette('blue-grey')
                              .accentPalette('amber');

            $urlRouterProvider.otherwise('/say');

            // setup icon provider
            // we can register icon and/or iconsets
            // see https://material.angularjs.org/latest/api/service/$mdIconProvider
            // where to find and download icons https://design.google.com/icons/
            $mdIconProvider
                .icon('inbox', 'content/icons/ic_inbox_white_48px.svg', 48)
                .icon('search', 'content/icons/ic_search_black_48px.svg', 48);
        });
})();
