'use strict';

angular.module('todoList')
    .controller('ListController', function (itemStore, filterService) {
        var vm = this;
        var _filter = {};

        var _setStatus = function (item) {
            item.completed = !item.completed;
        };

        vm.onToggleStatus = function (item) {
            _setStatus(item);
        };

        vm.getList = function () {
            return itemStore;
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
