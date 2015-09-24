'use strict';

angular.module('todoApp')
    .factory('itemResourceService', function($http) {
        var _getAll = function (successCb, errorCb) {
            return $http.get('/api/todos')
                .then(successCb, errorCb || angular.noop);
        };

        var _create = function (todo, successCb, errorCb) {
            return $http.post('/api/todos', todo)
                .then(successCb, errorCb || angular.noop);
        };

        var _update = function (id, todo, successCb, errorCb) {
            return $http.put('/api/todos', todo)
                .then(successCb, errorCb || angular.noop);
        };

        return {
            getAll: _getAll,
            create: _create,
            update: _update

        };
    });
