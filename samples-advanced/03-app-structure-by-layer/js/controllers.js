'use strict';

angular.module('todoApp')
    .controller('MainController', function () {
        var vm = this;

        vm.appTitle = 'Todo-App!';
    })

    .controller('TodoController', function (itemStore, filterTypes) {
        var vm = this;
        var _filter = {};
        var _activeFilter = filterTypes.ALL_ITEMS;

        var _add = function () {
            if (vm.text) {
                itemStore.unshift({text: vm.text, completed: false});
                _setFilter();
            }

            vm.text = null;
        };

        var _setStatus = function (item) {
            item.completed = !item.completed;
        };

        var _setFilter = function (filter) {
            switch (filter) {
                case filterTypes.ALL_ITEMS:
                    _filter = {};
                    _activeFilter = filter;
                    break;
                case filterTypes.OPEN_ITEMS:
                    _filter = {completed: false};
                    _activeFilter = filter;
                    break;
                case filterTypes.COMPLETED_ITEMS:
                    _filter = {completed: true};
                    _activeFilter = filter;
                    break;
                default:
                    _filter = {};
                    _activeFilter = filterTypes.ALL_ITEMS;
            }
        };

        vm.filterTypes = filterTypes;

        vm.onEnter = function ($event) {
            if ($event.which === 13) {
                _add();
            }
        };

        vm.onAdd = function () {
            _add();
        };

        vm.onToggleStatus = function (item) {
            _setStatus(item);
        };

        vm.onSelectFilter = function (type) {
            _setFilter(type);
        };

        vm.getList = function () {
            return itemStore;
        };

        vm.getFilter = function () {
            return _filter;
        };

        vm.filterIsActive = function (type) {
            return _activeFilter === type;
        };

        vm.setStyle = function (item) {
            return {
                'text-decoration': (item.completed)
                    ? 'line-through'
                    : 'no-line-through'
            }
        }
    })

    .controller('StatsController', function (itemStore) {
        var vm = this;

        vm.total = itemStore;
    })

    .controller('StatusController', function () {
        var vm = this;

        vm.label = 'Info';
        vm.message = 'App ist bereit!';
    });
