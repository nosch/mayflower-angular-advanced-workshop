'use strict';

angular.module('todoForm')
    .controller('FormController', function (itemStore, filterService) {
        var vm = this;

        var _add = function () {
            if (vm.text) {
                itemStore.unshift({text: vm.text, completed: false});
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
