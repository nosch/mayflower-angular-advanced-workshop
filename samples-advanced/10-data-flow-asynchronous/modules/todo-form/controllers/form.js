(function (angular) {
    'use strict';

    angular.module('todoForm')
        .controller('FormController', FormController);

    FormController.$inject = ['itemStoreService', 'filterService'];

    function FormController(itemStoreService, filterService) {
        var vm = this;

        vm.onEnter = onEnter;
        vm.onAdd = onAdd;

        function onEnter($event) {
            if ($event.which === 13) {
                add();
            }
        }

        function onAdd() {
            add();
        }

        function add() {
            if (vm.text) {
                itemStoreService.create(vm.text);
                filterService.setFilter();
            }

            vm.text = null;
        }
    }
}(angular));
