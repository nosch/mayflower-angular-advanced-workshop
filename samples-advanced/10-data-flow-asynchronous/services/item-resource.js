(function (angular) {
    'use strict';

    angular.module('todoApp')
        .factory('itemResourceService', itemResourceService);

    itemResourceService.$inject = ['$http'];

    function itemResourceService($http) {
        return {
            getAll: getAll,
            create: create,
            update: update

        };

        function getAll(successCb, errorCb) {
            return $http.get('/api/todos')
                .then(successCb, errorCb || angular.noop);
        }

        function create(todo, successCb, errorCb) {
            return $http.post('/api/todos', todo)
                .then(successCb, errorCb || angular.noop);
        }

        function update(id, todo, successCb, errorCb) {
            return $http.put('/api/todos', todo)
                .then(successCb, errorCb || angular.noop);
        }
    }
}(angular));
