(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('AppSettings', {
            appName: 'Bieber Say App',
            appVersion: 0.1,
            apiUrl: 'http://0.0.0.0:3000/api'
        });
})();