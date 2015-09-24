'use strict';

var list = function () {
    return {
        restrict: 'E',
        scope: {
            getItems: '&',
            getFilter: '&'
        },
        bindToController: true,
        controller: 'ListCtrl',
        controllerAs: 'ctrl',
        template: require('./../views/list.tpl.html')
    };
};

module.exports = list;
