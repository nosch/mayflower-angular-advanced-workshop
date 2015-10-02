(function (angular) {
    'use strict';

    angular.module('todoFilter')
        .controller('FilterController', FilterController);

    FilterController.$inject = ['filterService', 'filterTypes'];

    function FilterController(filterService, filterTypes) {
        var vm = this;

        vm.filterTypes = filterTypes;
        vm.onSelectFilter = onSelectFilter;
        vm.filterIsActive = filterIsActive;

        function onSelectFilter(type) {
            filterService.setFilter(type);
        }

        function filterIsActive(type) {
            return filterService.getActiveFilter() === type;
        }
    }
}(angular));
