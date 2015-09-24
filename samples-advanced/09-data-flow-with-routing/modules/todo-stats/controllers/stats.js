'use strict';

angular.module('todoStats')
    .controller('StatsController', function (itemStoreService) {
        var vm = this;

        vm.total = itemStoreService.getAll();
        vm.completed = itemStoreService.getCompleted();
        vm.open = itemStoreService.getOpen();
    });
