(function (angular) {
    'use strict';

    angular.module('todoStatus')
        .controller('StatusController', StatusController);

    function StatusController() {
        var vm = this;

        vm.label = 'Info';
        vm.message = 'App ist bereit!';
    }
}(angular));
