(function (angular) {
    'use strict';

    angular.module('todoStats')
        .controller('StatsController', StatsController);

    StatsController.$inject = ['itemStoreService'];

    function StatsController(itemStoreService) {
        var vm = this;

        vm.total = itemStoreService.getAll();
        vm.completed = itemStoreService.getCompleted();
        vm.open = itemStoreService.getOpen();
    }
}(angular));
