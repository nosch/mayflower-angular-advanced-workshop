'use strict';

angular.module('todoForm', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/new');

        $stateProvider
            .state('todo', {
                abstract: true,
                url: '/todo',
                template: '<x-ui-view></x-ui-view>'
            })
            .state('todo.create', {
                url: '/new',
                controller: 'FormController as todoForm',
                templateUrl: './modules/todo-form/views/todo-form.tpl.html',
                resolve: {
                    todoItem: function () {
                        return {
                            data: {
                                text: '',
                                completed: false
                            }
                        };
                    }
                }
            })
            .state('todo.update', {
                url: '/edit/:id',
                controller: 'FormController as todoForm',
                templateUrl: './modules/todo-form/views/todo-form.tpl.html',
                resolve: {
                    todoItem: function (itemStoreService, $stateParams) {
                        return itemStoreService.getOne($stateParams.id);
                    }
                }
            });
    });
