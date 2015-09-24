'use strict';

angular.module('todoApp', [
        'ui.router',
        'info',
        'todoForm',
        'todoFilter',
        'todoList',
        'todoStats',
        'todoStatus'
    ])

    .constant('navItems', [
        {title: 'Start', state: 'start', sref: 'start'},
        {title: 'Info', state: 'info', sref: 'info.help'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/start');

        $stateProvider
            .state('start', {
                url: '/start',
                templateUrl: './views/start.tpl.html'
            });
    });
