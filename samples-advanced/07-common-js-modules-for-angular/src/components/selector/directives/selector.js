'use strict';

var selector = function () {
    return {
        restrict: 'E',
        scope: {
            noFilter: '&',
            setFilter: '&',
            activeFilter: '&'
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'SelectorCtrl',
        template: require('./../views/selector.tpl.html')
    };
};

module.exports = selector;
