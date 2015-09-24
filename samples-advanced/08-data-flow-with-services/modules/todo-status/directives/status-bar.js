'use strict';

angular.module('todoStatus')
    .directive('statusBar', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<span><strong>{{label}}: </strong>{{message}}</span>',

            scope: {
                label: '@',
                message: '@'
            },

            link: function (scope) {
                $timeout(function () {
                    scope.message = '(keine Info vorhanden)';
                }, 4000);
            }
        };
    });
