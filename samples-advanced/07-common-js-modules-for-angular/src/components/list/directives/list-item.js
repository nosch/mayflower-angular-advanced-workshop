'use strict';

var listItem = function () {
    return {
        restrict: 'E',
        scope: {
            itemData: '='
        },
        bindToController: true,
        controller: 'ListItemCtrl',
        controllerAs: 'ctrl',
        template: require('./../views/list-item.tpl.html')
    };
};

module.exports = listItem;
