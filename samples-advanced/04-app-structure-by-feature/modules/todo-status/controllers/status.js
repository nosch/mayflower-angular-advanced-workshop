'use strict';

angular.module('todoStatus')
    .controller('StatusController', function () {
        var vm = this;

        vm.label = 'Info';
        vm.message = 'App ist bereit!';
    });
