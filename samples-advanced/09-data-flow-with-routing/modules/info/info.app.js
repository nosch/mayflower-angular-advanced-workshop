'use strict';

angular.module('info', [
        'ui.router',
        'info.help',
        'info.contact'
    ])

    .constant('infoModules', [
        {title: 'Hilfe', state: 'info.help', sref: 'info.help'},
        {title: 'Kontakt', state: 'info.contact', sref: 'info.contact'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/info');

        $stateProvider
            .state('info', {
                url: '/info',
                templateUrl: './modules/info/views/info.tpl.html',
                controller: 'InfoController as ctrl',
                abstract: true
            })
            .state('info.help', {
                url: '/help',
                templateUrl: './modules/info/views/info-help.tpl.html',
                controller: 'InfoController as ctrl'
            })
            .state('info.contact', {
                url: '/contact',
                templateUrl: './modules/info/views/info-contact.tpl.html',
                controller: 'InfoController as ctrl'
            });
    });
