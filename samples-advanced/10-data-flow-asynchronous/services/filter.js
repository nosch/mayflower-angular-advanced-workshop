(function (angular) {
    'use strict';

    angular.module('todoApp')
        .factory('filterService', filterService);

    filterService.$inject = ['filterTypes'];

    function filterService(filterTypes) {
        var filter = {};
        var activeFilter = filterTypes.ALL_ITEMS;

        return {
            getFilter: function () {
                return filter;
            },
            getActiveFilter: function () {
                return activeFilter;
            },
            setFilter: setFilter
        };

        function setFilter(filterType) {
            switch (filterType) {
                case filterTypes.ALL_ITEMS:
                    filter = {};
                    activeFilter = filterType;
                    break;
                case filterTypes.OPEN_ITEMS:
                    filter = {completed: false};
                    activeFilter = filterType;
                    break;
                case filterTypes.COMPLETED_ITEMS:
                    filter = {completed: true};
                    activeFilter = filterType;
                    break;
                default:
                    filter = {};
                    activeFilter = filterTypes.ALL_ITEMS;
            }
        }
    }
}(angular));
