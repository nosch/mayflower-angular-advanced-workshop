(function (angular) {
    'use strict';

    angular.module('todoApp')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;

        vm.appTitle = 'Todo-App!';
    }
}(angular));
