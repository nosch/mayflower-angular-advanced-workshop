'use strict';

angular.module('todoFilter')
    .controller('FilterController', function (filterService, filterTypes) {
        var vm = this;

        vm.filterTypes = filterTypes;

        vm.onSelectFilter = function (type) {
            filterService.setFilter(type);
        };

        vm.filterIsActive = function (type) {
            return filterService.getActiveFilter() === type;
        };
    });
