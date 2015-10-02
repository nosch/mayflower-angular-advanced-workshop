(function (angular) {
    'use strict';

    angular.module('todoStatus')
        .directive('statusBar', statusBar);

    statusBar.$inject = ['$timeout'];

    function statusBar($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<span><strong>{{label}}: </strong>{{message}}</span>',
            link: linkFn,
            scope: {
                label: '@',
                message: '@'
            }
        };

        function linkFn(scope) {
            $timeout(function () {
                scope.message = '(keine Info vorhanden)';
            }, 4000);
        }
    }
}(angular));
