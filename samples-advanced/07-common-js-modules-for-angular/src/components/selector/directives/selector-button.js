'use strict';

var selectorButton = function () {
    return {
        restrict: 'E',
        scope: {
            label: '@',
            clickHandler: '&onClick',
            isDisabled: '&'
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'SelectorButtonCtrl',
        template: require('./../views/selector-button.tpl.html')
    };
};

module.exports = selectorButton;
