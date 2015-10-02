(function (angular) {
    'use strict';

    angular.module('todoList')
        .controller('ListController', ListController);

    ListController.$inject = ['itemStoreService', 'filterService'];

    function ListController(itemStoreService, filterService) {
        var vm = this;

        vm.onToggleStatus = onToggleStatus;
        vm.getList = getLIst;
        vm.getFilter = getFilter;
        vm.setStyle = setStyle;

        function onToggleStatus(item) {
            setStatus(item);
        }

        function getLIst() {
            return itemStoreService.getAll();
        }

        function getFilter() {
            return filterService.getFilter();
        }

        function setStyle(item) {
            return {
                'text-decoration': (item.completed)
                    ? 'line-through'
                    : 'no-line-through'
            }
        }

        function setStatus(item) {
            item.completed = !item.completed;
            itemStoreService.updateItem(item);
        }
    }
}(angular));
