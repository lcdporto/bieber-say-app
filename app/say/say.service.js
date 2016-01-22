(function() {
    'use strict';

    angular
        .module('app.say')
        .service('SayService', Service);

    Service.$inject = ['$http', 'AppSettings'];

    /* @ngInject */
    function Service($http, AppSettings) {
        this.execute = execute;

        function execute(text) {
            $http({
                method: 'GET',
                url: AppSettings.apiUrl + '/say?text=' + text
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
            });

            /*return ItemsFactory.query(function(data) {
                items = data.results;
                var requests = [];
                // for each item in the say array make a request to get the container data
                angular.forEach(items, function(item) {
                    // get related resource data using container id as foreign key
                    var request = ContainersService.get(item.container);
                    request.then(function(container) {
                        item.container = container;
                    });
                    // add the request to the requests array
                    requests.push(request);
                });
                return $q.all(requests);
            });*/
        }
    }
})();
