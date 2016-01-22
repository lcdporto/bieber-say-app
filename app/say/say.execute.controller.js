(function () {
    'use strict';

    angular
        .module('app.say')
        .controller('SayExecuteController', Controller);

    Controller.$inject = ['SayService'];

    /* @ngInject */
    function Controller(SayService) {
        var vm = this;
        vm.title = 'Controller';
        vm.say = say;

        activate();

        function activate() {
        }

        function say(){
            SayService.execute(vm.sayText);
        }
    }
})();
