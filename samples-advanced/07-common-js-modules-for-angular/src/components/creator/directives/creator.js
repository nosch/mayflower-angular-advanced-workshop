'use strict';

var creator = function () {
    return {
        restrict: 'E',
        scope: {
            addItem: '&',
            setFilter: '&'
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'CreatorCtrl',
        template: require('./../views/creator.tpl.html')
    };
};

module.exports = creator;
