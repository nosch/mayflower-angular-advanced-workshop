'use strict';

angular.module('todoApp')
    .controller('MainController', function ($state, navItems) {
        var vm = this;

        vm.appTitle = 'Todo-App!';
        vm.state = $state;
        vm.navItems = navItems;
    });
