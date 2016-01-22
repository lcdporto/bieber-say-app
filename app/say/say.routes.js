(function() {
    'use strict';

    angular
        .module('app.say')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'say',
                config: {
                    url: '/say',
                    templateUrl: 'app/say/say.execute.html',
                    controller: 'SayExecuteController',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();
