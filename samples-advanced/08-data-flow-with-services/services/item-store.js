'use strict';

angular.module('todoApp')
    .factory('itemStoreService', function () {
        var _items = [];

        var _completedItems = [];
        var _openItems = [];

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

        var _create = function (text) {
            var item = {text: text, completed: false};

            _items.unshift(item);
            _setFilteredItems(item);
        };

        var _get = function () {
            return _items;
        };

        var _update = function (item) {
            _updateFilteredItems(item);
        };

        return {
            create: _create,
            getAll: _get,
            updateItem: _update,
            getCompleted: function () {
                return _completedItems;
            },
            getOpen: function () {
                return _openItems;
            }
        };
    });

