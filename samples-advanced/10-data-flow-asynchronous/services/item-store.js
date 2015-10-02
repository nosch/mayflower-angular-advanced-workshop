(function (angular) {
    'use strict';

    angular.module('todoApp')
        .factory('itemStoreService', itemStoreService);

    itemStoreService.$inject = ['itemResourceService'];

    function itemStoreService(itemResourceService) {
        var items = [];
        var completedItems = [];
        var openItems = [];

        return {
            init: loadFromResource,
            create: create,
            getAll: get,
            updateItem: update,
            getCompleted: function () {
                return completedItems;
            },
            getOpen: function () {
                return openItems;
            }
        };

        function loadFromResource() {
            itemResourceService.getAll(function (response) {
                response.data.map(function (item) {
                    items.push(item);
                    setFilteredItems(item);
                });
            });
        }

        function getItemIndexById(id) {
            var itemIndex = -1;

            items.map(function (item, index) {
                if (item.id === id) {
                    itemIndex = index;
                }
            });

            return itemIndex;
        }

        function setFilteredItems(item) {
            if (item.completed === true) {
                completedItems.push(item);
            } else {
                openItems.push(item);
            }
        }

        function updateFilteredItems(item) {
            if (item.completed === true) {
                openItems.shift();
            } else {
                completedItems.shift();
            }

            setFilteredItems(item);
        }

        function get() {
            return items;
        }

        function create(text) {
            var item = {text: text, completed: false};

            itemResourceService.create(item, function (response) {
                items.unshift(response.data);
                setFilteredItems(response.data);
            });

        }

        function update(item) {
            var index = getItemIndexById(item.id);

            itemResourceService.update(item.id, item, function (response) {
                if (index !== -1) {
                    items[index] = response.data;
                    updateFilteredItems(response.data)
                }
            });
        }
    }
}(angular));
