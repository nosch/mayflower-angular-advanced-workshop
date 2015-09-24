'use strict';

var angular = require('angular');

var appStore = function (constants) {
    var _filterTypes = constants.filterTypes;

    var _items = [];

    var _item = {text: '', completed: false};

    var _filter = null;

    var _activeFilterType = _filterTypes.ALL_ITEMS;

    var _getFilteredItems = function (query) {
        var filterKey = Object.keys(query)[0];

        return _items.filter(function (item) {
            return item[filterKey] === query[filterKey];
        });
    };

    return {
        getItems: function (query) {
            if (!query) {
                return _items;
            }

            return _getFilteredItems(query);
        },

        setFilter: function (type) {
            switch (type) {
                case _filterTypes.ALL_ITEMS:
                    _filter = null;
                    _activeFilterType = type;
                    break;

                case _filterTypes.OPEN_ITEMS:
                    _filter = {completed: false};
                    _activeFilterType = type;
                    break;

                case _filterTypes.COMPLETED_ITEMS:
                    _filter = {completed: true};
                    _activeFilterType = type;
                    break;

                default:
                    _filter = null;
                    _activeFilterType = _filterTypes.ALL_ITEMS;
            }
        },

        getFilter: function () {
            return _filter;
        },

        getActiveFilterType: function () {
            return _activeFilterType;
        },

        addItem: function (text) {
            var item = angular.copy(_item);

            item.text = text;
            _items.unshift(item);
        }
    };
};

module.exports = appStore;
