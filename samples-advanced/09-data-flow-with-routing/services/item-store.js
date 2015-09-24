'use strict';

angular.module('todoApp')
    .factory('itemStoreService', function () {
        var _items = [];

        var _completedItems = [];
        var _openItems = [];

        var _getItemIndexById = function (id) {
            var itemIndex = -1;

            _items.map(function (item, index) {
                if (item.id === id) {
                    itemIndex = index;
                }
            });

            return itemIndex;
        };

        var _setFilteredItems = function (item) {
            if (item.completed === true) {
                _completedItems.push(item);
            } else {
                _openItems.push(item);
            }
        };

        var _updateFilteredItems = function (item) {
            if (item.completed === true) {
                _openItems.shift();
            } else {
                _completedItems.shift();
            }

            _setFilteredItems(item);
        };

        var _create = function (item) {
            item.id = Math.floor(Math.random() * 1000);
            item.completed = false;

            _items.unshift(item);
            _setFilteredItems(item);
        };

        var _get = function () {
            return _items;
        };

        var _getById = function (id) {
            return _items.filter(function (item) {
                return item.id === +id;
            })[0];
        };

        var _update = function (item) {
            var index = _getItemIndexById(item.id);

            if (index !== -1) {
                _items[index] = item;
            }
        };

        var _updateStatus = function (item) {
            var index = _getItemIndexById(item.id);

            if (index !== -1) {
                _items[index].completed = item.completed;
                _updateFilteredItems(item);
            }
        };

        var _save = function (item) {
            if (item.id) {
                _update(item);
            } else {
                _create(item);
            }
        };

        return {
            save: _save,
            updateStatus: _updateStatus,
            getAll: _get,
            getOne: _getById,
            getCompleted: function () {
                return _completedItems;
            },
            getOpen: function () {
                return _openItems;
            }
        };
    });

