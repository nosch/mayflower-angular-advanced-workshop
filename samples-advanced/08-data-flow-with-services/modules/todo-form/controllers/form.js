'use strict';

angular.module('todoForm')
    .controller('FormController', function (itemStoreService, filterService) {
        var vm = this;

        var _add = function () {
            if (vm.text) {
                itemStoreService.create(vm.text);
                filterService.setFilter();
            }

            vm.text = null;
        };

        vm.onEnter = function ($event) {
            if ($event.which === 13) {
                _add();
            }
        };

        vm.onAdd = function () {
            _add();
        };
    });
