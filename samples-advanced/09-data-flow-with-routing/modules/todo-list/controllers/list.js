'use strict';

angular.module('todoList')
    .controller('ListController', function ($state, itemStoreService, filterService) {
        var vm = this;

        var _setStatus = function (item) {
            item.completed = !item.completed;
            itemStoreService.updateStatus(item);
        };

        vm.selectItem = function (id) {
            $state.go('todo.update', {id: id});
        };

        vm.onToggleStatus = function (item) {
            _setStatus(item);
        };

        vm.getList = function () {
            return itemStoreService.getAll();
        };

        vm.getFilter = function () {
            return filterService.getFilter();
        };

        vm.setStyle = function (item) {
            return {
                'cursor': 'pointer',
                'text-decoration': (item.completed)
                    ? 'line-through'
                    : 'no-line-through'
            }
        }
    });
