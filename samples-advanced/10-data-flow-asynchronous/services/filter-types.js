(function (angular) {
    'use strict';

    angular.module('todoApp')
        .constant('filterTypes', {
            ALL_ITEMS: 'allItems',
            OPEN_ITEMS: 'openItems',
            COMPLETED_ITEMS: 'completedItems'
        });
}(angular));
