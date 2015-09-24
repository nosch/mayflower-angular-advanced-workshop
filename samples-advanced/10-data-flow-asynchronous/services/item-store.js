'use strict';

angular.module('todoApp')
    .factory('itemStoreService', function (itemResourceService) {
        var _items = [];
        var _completedItems = [];
        var _openItems = [];

        var _loadFromResource = function () {
            itemResourceService.getAll(function (response) {
                response.data.map(function (item) {
                    _items.push(item);
                    _setFilteredItems(item);
                });
            });
        };

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

        var _get = function () {
            return _items;
        };

        var _create = function (text) {
            var item = {text: text, completed: false};

            itemResourceService.create(item, function (response) {
                _items.unshift(response.data);
                _setFilteredItems(response.data);
            });

        };

        var _update = function (item) {
            var index = _getItemIndexById(item.id);

            itemResourceService.update(item.id, item, function (response) {
                if (index !== -1) {
                    _items[index] = response.data;
                    _updateFilteredItems(response.data)
                }
            });
        };

        // Initial data call
        _loadFromResource();

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

