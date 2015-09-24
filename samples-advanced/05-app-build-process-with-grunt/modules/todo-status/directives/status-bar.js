'use strict';

angular.module('todoStatus')
    .directive('statusBar', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/todo-status/views/status-bar.tpl.html',

            scope: {
                label: '@',
                message: '@'
            },

            link: function (scope) {
                $timeout(function () {
                    scope.message = ' (keine Info vorhanden)';
                }, 4000);
            }
        };
    });
