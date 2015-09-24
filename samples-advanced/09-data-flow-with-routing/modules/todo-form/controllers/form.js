'use strict';

angular.module('todoForm')
    .controller('FormController', function ($state, todoItem, itemStoreService, filterService) {
        var vm = this;

        vm.item = todoItem;

        vm.title = (!vm.item.id) ? 'Neue Aufgabe erstellen' : 'Aufgabe bearbeiten';

        var _save = function () {
            if (vm.item.text) {
                itemStoreService.save(vm.item);
                filterService.setFilter();

                $state.go('start');
            }
        };

        vm.onEnter = function ($event) {
            if ($event.which === 13) {
                _save();
            }
        };

        vm.onSave = function () {
            _save();
        };
    });
