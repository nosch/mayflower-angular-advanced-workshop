'use strict';

angular.module('todoApp')
    .value('itemStore', [{
        text: 'AngularJS: lernen, lernen, lernen, lernen!',
        completed: true
    }, {
        text: 'Noch mehr AngularJS lernen!',
        completed: false
    }])

    .constant('filterTypes', {
        ALL_ITEMS: 'allItems',
        OPEN_ITEMS: 'openItems',
        COMPLETED_ITEMS: 'completedItems'
    });
