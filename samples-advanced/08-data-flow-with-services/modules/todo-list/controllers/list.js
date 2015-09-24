'use strict';

angular.module('todoList')
    .controller('ListController', function (itemStoreService, filterService) {
        var vm = this;

        var _setStatus = function (item) {
            item.completed = !item.completed;
            itemStoreService.updateItem(item);
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
                'text-decoration': (item.completed)
                    ? 'line-through'
                    : 'no-line-through'
            }
        }
    });
