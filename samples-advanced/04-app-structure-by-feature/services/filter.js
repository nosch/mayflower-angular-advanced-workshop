'use strict';

angular.module('todoApp')
    .factory('filterService', function (filterTypes) {
        var _filter = {};
        var _activeFilter = filterTypes.ALL_ITEMS;

        var _setFilter = function (filter) {
            switch (filter) {
                case filterTypes.ALL_ITEMS:
                    _filter = {};
                    _activeFilter = filter;
                    break;
                case filterTypes.OPEN_ITEMS:
                    _filter = {completed: false};
                    _activeFilter = filter;
                    break;
                case filterTypes.COMPLETED_ITEMS:
                    _filter = {completed: true};
                    _activeFilter = filter;
                    break;
                default:
                    _filter = {};
                    _activeFilter = filterTypes.ALL_ITEMS;
            }
        };

        return {
            getFilter: function () {
                return _filter;
            },
            getActiveFilter: function () {
                return _activeFilter;
            },
            setFilter: _setFilter
        };
    });
