'use strict';

var container = function () {
    return {
        restrict: 'E',
        scope: {
            heading: '@'
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'ContainerCtrl',
        template: require('./../views/container.tpl.html')
    };
};

module.exports = container;
