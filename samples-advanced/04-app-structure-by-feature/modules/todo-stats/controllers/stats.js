'use strict';

angular.module('todoStats')
    .controller('StatsController', function (itemStore) {
        var vm = this;

        vm.total = itemStore;
    });
