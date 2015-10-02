(function (angular) {
    'use strict';

    angular.module('todoApp', [
            'todoForm',
            'todoFilter',
            'todoList',
            'todoStats',
            'todoStatus'
        ])

        .run(function (itemStoreService) {
            itemStoreService.init();
        });
}(angular));
